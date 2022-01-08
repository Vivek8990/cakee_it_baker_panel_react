import React from 'react';
import './upload.css'

function Upload() {
    return(
        <div className="upload">
                                <div class="card card-statistics">
                                    <div class="card-header">
                                        <div class="card-heading">
                                            <h4 class="card-title">Upload a Cake</h4>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <form>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="inputEmail4">Cake Name*</label>
                                                    <input type="text" class="form-control" id="inputEmail4" placeholder="Cake Name"/>
                                                </div>
                                                
                                            </div>
                                            <div class="form-group">
                                                <label for="inputAddress">Description*</label>
                                                <input type="text" class="form-control" id="inputAddress" placeholder="Description"/>
                                            </div>
                                            
                                            <div class="form-row">
                                                

                                                <div class="form-group col-md-4">
                                                    <label for="inputState">Weight*</label>
                                                    <select id="inputState" class="form-control">
                                                        <option selected="">Select Weight</option>
                                                        <option>0.5kg</option>
                                                        <option>1 kg</option>
                                                        <option>2 kg</option>
                                                        <option>3 kg</option>
                                                        <option>4 kg</option>
                                                        <option>5 kg</option>
                                                        <option>6 kg</option>

                                                    </select>
                                                </div>
                                                <div class="form-group col-md-2">
                                                    <label for="inputZip">Price*</label>
                                                    <input type="text" class="form-control" id="inputZip" placeholder="Price"/>
                                                </div>
                                            </div>
                                                <h5>Upload 5 Images Maximum 80kb Size *</h5>

                                            <div class="input-group mb-3">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="inputGroupFile02"/>
                                                <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                                            </div>
                                            <div class="input-group-append">
                                                <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
                                            </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="inputGroupFile02"/>
                                                <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                                            </div>
                                            <div class="input-group-append">
                                                <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
                                            </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="inputGroupFile02"/>
                                                <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                                            </div>
                                            <div class="input-group-append">
                                                <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
                                            </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="inputGroupFile02"/>
                                                <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                                            </div>
                                            <div class="input-group-append">
                                                <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
                                            </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="inputGroupFile02"/>
                                                <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                                            </div>
                                            <div class="input-group-append">
                                                <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
                                            </div>
                                        </div>
                                            
                                            <button type="submit" class="btn btn-primary">Upload</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
    )
}

export default Upload;