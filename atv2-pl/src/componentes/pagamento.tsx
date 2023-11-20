import { Component } from "react";


type props = {
    tema: string
    red: string
}

export default class Pagamento extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <br />
                <form className="row g-3">
                <div className="container text-center">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF do Cliente" aria-label="CPF do Cliente" aria-describedby="basic-addon1" />
                    </div>
                </div>
                    <div className="container text-center">
                        <div className="input-group mb-5">
                        <button className="btn btn-outline" type="button" style={{ background: tema }}>Buscar</button>
                        </div>    
                    </div>
                </form>
            <h5>Produtos e Serviços Consumidos</h5>
            <ul className="list-group">
                <li className="list-group-item"> Produto1</li>
                <li className="list-group-item"> Produto2</li>
                <li className="list-group-item"> Produto3</li>
                <li className="list-group-item"> Produto4</li>
                <li className="list-group-item"> Produto5</li>
            </ul>
            <ul className="pagination">
                <li className="page-item disabled"><a className="page-link" href="#">Nome do Produto ou Serviço</a></li>
                <li className="page-item disabled"><a className="page-link" href="#">R$ 00,00</a></li>
                <li className="page-item disabled"><a className="page-link" href="#">Quantidade</a></li>
                <li className="page-item disabled"><a className="page-link" href="#">Nome Pet</a></li>
            </ul>
            {/* // <form className="needs-validation" noValidate>

            //     <div className="form-row">
            //         <div className="col-md-4 mb-3">
            //             <label htmlFor="validationCustom01">First name</label>
            //             <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="Mark" required />
            //             <div className="valid-feedback">
            //                 Looks good!
            //             </div>
            //         </div>
            //         <div className="col-md-4 mb-3">
            //             <label htmlFor="validationCustom02">Last name</label>
            //             <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required />
            //             <div className="valid-feedback">
            //                 Looks good!
            //             </div>
            //         </div>
            //         <div className="col-md-4 mb-3">
            //             <label htmlFor="validationCustomUsername">Username</label>
            //             <div className="input-group">
            //                 <div className="input-group-prepend">
            //                     <span className="input-group-text" id="inputGroupPrepend">@</span>
            //                 </div>
            //                 <input type="text" className="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required />
            //                 <div className="invalid-feedback">
            //                     Please choose a username.
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            //     <div className="form-row">
            //         <div className="col-md-6 mb-3">
            //             <label htmlFor="validationCustom03">City</label>
            //             <input type="text" className="form-control" id="validationCustom03" placeholder="City" required />
            //             <div className="invalid-feedback">
            //                 Please provide a valid city.
            //             </div>
            //         </div>
            //         <div className="col-md-3 mb-3">
            //             <label htmlFor="validationCustom04">State</label>
            //             <input type="text" className="form-control" id="validationCustom04" placeholder="State" required />
            //             <div className="invalid-feedback">
            //                 Please provide a valid state.
            //             </div>
            //         </div>
            //         <div className="col-md-3 mb-3">
            //             <label htmlFor="validationCustom05">Zip</label>
            //             <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required />
            //             <div className="invalid-feedback">
            //                 Please provide a valid zip.
            //             </div>
            //         </div>
            //     </div>
            //     <div className="form-group">
            //         <div className="form-check">
            //             <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            //             <label className="form-check-label" htmlFor="invalidCheck">
            //                 Agree to terms and conditions
            //             </label>
            //             <div className="invalid-feedback">
            //                 You must agree before submitting.
            //             </div>
            //         </div>
            //     </div>
            //     <button className="btn btn-primary" type="submit">Submit form</button>
            // </form> */}
        </div>
        )
    }
}