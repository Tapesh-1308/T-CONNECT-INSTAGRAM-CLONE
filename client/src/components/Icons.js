import React from 'react'

const Icons = ({ setContent, content, theme }) => {
    const reactions = [
        'â¤ī¸', 'đ', 'đ¯', 'đĸ', 'đĄ', 'đ', 'đ', 'đ',
        'đ', 'đ', 'đ', 'đ', 'đ', 'đŗ', 'đ­', 'đ',
        'đ¤', 'đ¤¤', 'đģ', 'đ', 'đ¤', 'đ´', 'đˇ', 'đĩ',
        'đ', 'đ¤', 'âšī¸', 'đ', 'đ¤', 'đ', 'đ', 'đŠ'
    ]

    return (
        <div className="nav-item dropdown"
            style={{ opacity: 1, filter: theme ? 'invert(1)' : 'invert(0)' }}>

            <span className="nav-link position-relative px-1" id="navbarDropdown"
                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span style={{ opacity: 0.4 }}>đ</span>
            </span>

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="reactions">
                    {
                        reactions.map(icon => (
                            <span key={icon} onClick={() => setContent(content + icon)}>
                                {icon}
                            </span>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Icons
