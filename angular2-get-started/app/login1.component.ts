import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Route} from '@angular/router';
@Component({ 
    selector: 'my-login1',
    templateUrl: 'app/login1.component.html'

})
export class Login1 implements OnInit {
    form: FormGroup;
    constructor(private formBuilder: FormBuilder, private router:Router) { }
    ngOnInit() {
        this.form = this.formBuilder.group({
            username: this.formBuilder.control('', Validators.required),
            password: this.formBuilder.control('', [Validators.required, Validators.minLength(5)])
        })
    }
    onSubmit() {
        console.log(this.form.value);
        this.router.navigate(['product']);
    }
}