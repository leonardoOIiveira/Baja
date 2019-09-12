import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {

  color = '#ffffff';

  @ViewChild ('domObj', {static: true}) canvasEl: ElementRef;
  private _ELEMENT : any;
  private _SCENE;
  private _CAMERA;
  public renderer;
  private _GEOMETRY;
  public _MATERIAL;
  public _CUBE;

  constructor() { }

  ionViewDidLoad() : void
  {
      
  }

  ngOnInit() {
    this.initialiseWebGLObjectAndEnvironment();
    this.renderAnimation();
  }

  ChangeColor(){
      var string = this.color.toString(); 
      string = string.slice(1); 
      this._MATERIAL.color.setHex( `0x${string}` );
  }

  initialiseWebGLObjectAndEnvironment() : void
   {
      this._ELEMENT 			= this.canvasEl.nativeElement;
      this._SCENE 				= new THREE.Scene();
   	  this._CAMERA 				= new THREE.PerspectiveCamera( 25, (window.innerWidth*0.9)/(window.innerHeight*0.4), 0.1, 1000 );
   	  this.renderer 			= new THREE.WebGLRenderer();
      this.renderer.setSize( window.innerWidth * 0.9 , window.innerHeight * 0.4 );
   	  this._ELEMENT.appendChild( this.renderer.domElement );
      this._GEOMETRY 			= new THREE.BoxGeometry( 1, 1, 1 );
      this._MATERIAL 			= new THREE.MeshBasicMaterial( { color: this.color, wireframe : false } );
      this._CUBE 				= new THREE.Mesh( this._GEOMETRY, this._MATERIAL );
      this._SCENE.add(this._CUBE);
      this._CAMERA.position.z 	= 5;
   }

   private _animate () : void
   {
   	  requestAnimationFrame(() =>
   	  {
   	     this._animate();
   	  });

   	  this._CUBE.rotation.x += 0.015;
   	  this._CUBE.rotation.y += 0.015;

       this.renderer.render(this._SCENE, this._CAMERA);
   };

   renderAnimation() : void
   {
     this._animate();
   }


   /** Ref: https://github.com/zefoy/ngx-color-picker 
    * Ref: http://masteringionic.com/blog/2017-11-21-creating-webgl-animations-within-an-ionic-application-using-threejs/ */

}
