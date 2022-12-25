import React from 'react';
import styles from './adminsupport.module.css';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import Message from './Message/Message';

export default function AdminSupport() {
  return (
    <div className={`${styles["support-container"]}`}>
      <div className={`${styles["sidebar-container"]}`}>
        <AdminNavbar className={`${styles.nav}`} />
      </div>

      <div className={`${styles['content-container']}`}>
        <div>
            <h1>Admin Support Page</h1>
        </div>

        <div className={`row border border-secondary`}>
            <div className={`col-3 ${styles.leftcol} border-end border-secondary`}>
                <div className='ps-5 pt-4 pb-4 border-primary'>
                    All Messages
                </div>

                <div className='row h-auto'>
                    <Message />
                </div>
                <div className='row h-auto'>
                    <Message />
                </div>
                <div className='row h-auto'>
                    <Message />
                </div>
                <div className='row h-auto'>
                    <Message />
                </div>
            </div>
            <div className='col-9'>
                Hello
            </div>
        </div>
      </div>
    </div>
  )
}
