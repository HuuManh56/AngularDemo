import { Component, OnInit } from '@angular/core'
import { listProduct } from './service/product.sevice'
@Component({
    selector: 'product-component',
    templateUrl: 'app/product.component.html',
    providers: [listProduct]

})
export class product implements OnInit {
    public products: any[];
    constructor(private list: listProduct) {

    }
    ngOnInit() {
        this.list.GetList().subscribe((response: any)=>{
            this.products= response;
        
        })
    }
    Delete( id: number){
        let cf= confirm(" Bạn có chắc chắn muốn xóa không ?");
            if(cf){
                this.list.Delete(id).subscribe((response)=>{
                    if(response){
                        alert(" Delete thành công");
                        this.LoadData();
                    }
                });
            
        }
    }
    LoadData(){
        this.list.GetList().subscribe((response: any)=>{
            this.products= response;
        
        })
    }

}