function PopupModal({ popupModal, setPopupModal, handleDelete, handleCheck }) {
    let { showHide, status, message, id, taskStatus } = popupModal;

    return (
        <>
            {showHide &&
                <div style={{ padding: "8px", position: 'fixed', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: "#ffffff", boxShadow: "0px 1px 8px 1px #b7bbbe", borderRadius: "4px", width: "15%" }}>
                    <div style={{ fontSize: "34px", display: "flex", justifyContent: "center" }}>{status == "warning" ? '⚠️' : status == "success" ? '✅' : status == "delete" ? '✅':'❓'}</div>
                    <p style={{ fontSize: "8px", fontWeight: 600, textAlign: "center", margin: "15px 0px", color:'black' }}>{message}</p>
                    <div style={{ display: 'flex', justifyContent: (status == "confirmDelete" || status == "confirmTask") ? 'space-around': 'center', alignItems: 'center', margin: "5px 0px" }}>
                        {
                            (status == "confirmDelete" || status == "confirmTask" ) ?
                                <><button onClick={()=>status == "confirmDelete" ? handleDelete(id) : handleCheck(id, taskStatus)} style={{fontSize:"10px",fontWeight: 500, backgroundColor: "red",color: "white", border: "none", borderRadius: "2px", padding: "2px 10px"}}>Yes</button><button onClick={() => setPopupModal({ showHide: false, status: "", message: "" })} style={{fontSize:"10px",backgroundColor: "#15487a",color: "white", border: "none", borderRadius: "2px", padding: "2px 10px", fontWeight: 500}}>No</button></>
                                : <button onClick={() => setPopupModal({ showHide: false, status: "", message: "" })} style={{ fontSize:"10px", display: 'block', margin: '0 auto', backgroundColor: "#15487a", color: "white", border: "none", borderRadius: "4px", padding: "2px 10px" }}>Okay</button>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default PopupModal;