import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { follow, unfollow } from '../redux/actions/profileAction'

const FollowBtn = ({ user }) => {
    const [followed, setFollowed] = useState(false)

    const { auth, profile, socket } = useSelector(state => state)
    const dispatch = useDispatch()

    const [load, setload] = useState(false)

    useEffect(() => {
        if (auth.user.following.find(item => item._id === user._id)) {
            setFollowed(true)
        }
        return () => setFollowed(false)
    }, [auth.user.following, user._id])

    const handleFollow = async () => {
        if (load) return;
        setFollowed(true)
        setload(true)
        await dispatch(follow({ users: profile.users, user, auth, socket }))
        setload(false)
    }

    const handleUnFollow = async () => {
        if (load) return;
        setFollowed(false)
        setload(true)
        await dispatch(unfollow({ users: profile.users, user, auth, socket }))
        setload(false)
    }

    return (
        <>
            {
                followed
                    ? <button className="btn btn-danger"
                        onClick={handleUnFollow}>
                        Unfollow
                    </button>
                    : <button className="btn btn-outline-info"
                        onClick={handleFollow}>
                        Follow
                    </button>
            }
        </>
    )
}

export default FollowBtn
