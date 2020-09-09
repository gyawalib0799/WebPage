import React from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>BIJAY GYAWALI</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
