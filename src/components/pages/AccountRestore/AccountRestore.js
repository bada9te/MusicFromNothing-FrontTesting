import Topbar from '../../top-bar/top-bar'
import logoRestore from '../Images/logo_restore.png'
import './AccountRestore.scss'
import AccountRestoreForm from '../../forms/account-restore-form'
import { useLayoutEffect } from "react";
import { gsap } from "gsap";


const AccountRestore = (props)=> {
    useLayoutEffect(() => {
        gsap.fromTo('.anim0', {y: 500}, { duration: 0.5, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim1', {y: 500}, { duration: 0.5, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim2', {y: 500}, { duration: 0.8, ease: "expo.out", y: 0 });
    }, [])

    return(
        <>
            <div className="container-fluid">
                <div className="row position-sticky top-0" style={{zIndex: 1}}>
                    <Topbar text="Account Restore" username="UserName" where="account-restore"/>
                </div>

                <div className="col overflow-y-auto pt-5 mt-5" style={{maxHeight: '93vh'}}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <p className='anim0 head-text' style={{textAlign: 'center'}}><span style={{'color': '#1BA39C'}}>A</span><span className='d-mode-text'>ccount restore</span></p>
                        <span className="anim1 d-mode-text text-center fs-1">Account AccountName is ready to be restored, please fill in the form below:</span>
                    </div>
                    <div className="row">
                        <div className="anim2 col d-flex justify-content-center align-items-center m-5">
                            <img style={{width: '30vh', height: '30vh', marginRight: '10vh'}} className="restore-image rounded-circle shadow" src={logoRestore} alt="restoreImage"></img>
                            <AccountRestoreForm/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountRestore;


/*
        <>
            <div className="container-fluid position-sticky">
                <div className="row mb-5">
                    <Topbar text="Account Restore" username="UserName" where="account-restore"/>
                </div>
                <div className="row mb-5">
                    <h1 className='hs'><span className='first-first-letter'>C</span>hanging password of account</h1>
                    <h2 className='hs'><span className='second-first-letter'>A</span>ccount name</h2>
                </div>
                
                <div className='d-flex justify-content-center' >
                    <img className='logo' src={logotup} style={{width: '19em', height:'19em', borderRadius: '50%'}}></img>
                    <div className="container login-form-all" style={{border: '3px solid #d2d4d5', borderRadius: '10px', width:'340px', height:'330px'}}>
                        <AccountRestoreForm/>
                    </div>
                    
                </div>
            </div>
        </>
*/