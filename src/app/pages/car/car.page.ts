import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import * as THREE from 'three';
import { HttpService } from 'src/app/core/services/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/core/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {

  colorSelected: number = 0; 
  images: string[] = [];

  buyer: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), 
    nome: new FormControl('', Validators.required), 
  })

  constructor(
    private http: HttpService, 
    private common: CommonService, 
    private router: Router) { 
    this.http.LerOArquivoDeCores()
    .subscribe((res) => {
      this.images = res.split('\n');
    })
  }

  ionViewDidLoad() : void
  {
      
  }

  EnviarPedido() {
    if(this.buyer.valid) {
      var obj = {
        email: this.buyer.controls.email.value, 
        nome: this.buyer.controls.nome.value, 
        carro: 1, 
        cores: [{
          id_peca: 1, 
          cor: this.images[this.colorSelected]
        }]
      };
      this.http.FazerPedidoDeCompraDeCarro(obj).subscribe((res: any) => {
        console.log(res); 
        if(res) {
          this.common.ApresentarAlerta('Pedido feito com sucesso'); 
          setTimeout(() => {
              this.router.navigateByUrl('/home')
          }, 2000);
        }
      })
    } else {
      this.common.ApresentarAlerta('Formulário invalido, por favor confira os dados novamente.')
    }
  }

  ngOnInit() {
    // this.initialiseWebGLObjectAndEnvironment();
    // this.renderAnimation();
  }

  // ChangeColor(){
  //     var string = this.color.toString(); 
  //     string = string.slice(1); 
  //     this._MATERIAL.color.setHex( `0x${string}` );
  // }

  // initialiseWebGLObjectAndEnvironment() : void
  //  {
  //     this._ELEMENT 			= this.canvasEl.nativeElement;
  //     this._SCENE 				= new THREE.Scene();
  //  	  this._CAMERA 				= new THREE.PerspectiveCamera( 25, (window.innerWidth*0.9)/(window.innerHeight*0.4), 0.1, 1000 );
  //  	  this.renderer 			= new THREE.WebGLRenderer();
  //     this.renderer.setSize( window.innerWidth * 0.9 , window.innerHeight * 0.4 );
  //  	  this._ELEMENT.appendChild( this.renderer.domElement );
  //     this._GEOMETRY 			= new THREE.BoxGeometry( 1, 1, 1 );
  //     this._MATERIAL 			= new THREE.MeshBasicMaterial( { color: this.color, wireframe : false } );
  //     this._CUBE 				= new THREE.Mesh( this._GEOMETRY, this._MATERIAL );
  //     this._SCENE.add(this._CUBE);
  //     this._CAMERA.position.z 	= 5;
  //  }

  //  private _animate () : void
  //  {
  //  	  requestAnimationFrame(() =>
  //  	  {
  //  	     this._animate();
  //  	  });

  //  	  this._CUBE.rotation.x += 0.015;
  //  	  this._CUBE.rotation.y += 0.015;

  //      this.renderer.render(this._SCENE, this._CAMERA);
  //  };

  //  renderAnimation() : void
  //  {
  //    this._animate();
  //  }


   /** Ref: https://github.com/zefoy/ngx-color-picker 
    * Ref: http://masteringionic.com/blog/2017-11-21-creating-webgl-animations-within-an-ionic-application-using-threejs/ */

}
