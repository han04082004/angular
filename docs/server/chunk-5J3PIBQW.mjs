import './polyfills.server.mjs';
import{a as C1,b as b4,c as y4,d as g1,e as N4,f as S4,g as v3,h as L1,i as x1,j as p3,k as w4,n as k4,r as A4,t as D4,u as b1,v as T4}from"./chunk-6SSVS6NA.mjs";import{a as _4,b as F4,c as P4}from"./chunk-5FBP7JEP.mjs";import{$a as u,$b as L4,Ba as n4,Bb as z4,Ca as $2,Db as V1,Fa as d,Ga as z,I as v1,Ia as o4,Ib as V4,J as p1,K as I,Ka as X2,L as s2,N as Y,Na as Y2,Nb as M4,Oa as l2,Ob as C4,P as G,Pb as h3,Q as V2,Sb as u3,T as W2,Ta as W,U as L,Ua as o3,V as n2,Va as f2,W as j,Wa as C,Xa as Q2,Y as s4,Ya as d1,Yb as M1,Za as Z,Zb as K2,_a as f,_b as g4,aa as o2,ab as M,ba as M2,bb as l3,bc as x4,ca as C2,cb as f3,cc as m2,da as n3,db as g2,eb as l4,f as t2,fa as q2,fb as f4,gb as w,ha as w2,hb as D,i as i4,ia as J,ib as m4,jb as h4,kb as u4,lb as H,mb as L2,n as r4,nb as F,pb as v4,qb as p4,rb as d4,s as t4,sb as H1,tb as x,ub as H4,vb as k2,wb as m3,xb as z1}from"./chunk-M3JV7V3G.mjs";import{a as S,b as U}from"./chunk-VVCT4QZE.mjs";var j4=(()=>{let c=class c{constructor(a,r){this._renderer=a,this._elementRef=r,this.onChange=t=>{},this.onTouched=()=>{}}setProperty(a,r){this._renderer.setProperty(this._elementRef.nativeElement,a,r)}registerOnTouched(a){this.onTouched=a}registerOnChange(a){this.onChange=a}setDisabledState(a){this.setProperty("disabled",a)}};c.\u0275fac=function(r){return new(r||c)(z(X2),z(w2))},c.\u0275dir=j({type:c});let e=c;return e})(),D0=(()=>{let c=class c extends j4{};c.\u0275fac=(()=>{let a;return function(t){return(a||(a=n3(c)))(t||c)}})(),c.\u0275dir=j({type:c,features:[l2]});let e=c;return e})(),W4=new Y("");var T0={provide:W4,useExisting:p1(()=>T2),multi:!0};function _0(){let e=h3()?h3().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var F0=new Y(""),T2=(()=>{let c=class c extends j4{constructor(a,r,t){super(a,r),this._compositionMode=t,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!_0())}writeValue(a){let r=a??"";this.setProperty("value",r)}_handleInput(a){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(a)}_compositionStart(){this._composing=!0}_compositionEnd(a){this._composing=!1,this._compositionMode&&this.onChange(a)}};c.\u0275fac=function(r){return new(r||c)(z(X2),z(w2),z(F0,8))},c.\u0275dir=j({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,t){r&1&&w("input",function(n){return t._handleInput(n.target.value)})("blur",function(){return t.onTouched()})("compositionstart",function(){return t._compositionStart()})("compositionend",function(n){return t._compositionEnd(n.target.value)})},features:[H1([T0]),l2]});let e=c;return e})();var q4=new Y(""),$4=new Y("");function X4(e){return e!=null}function Y4(e){return z4(e)?i4(e):e}function Q4(e){let c={};return e.forEach(i=>{c=i!=null?S(S({},c),i):c}),Object.keys(c).length===0?null:c}function K4(e,c){return c.map(i=>i(e))}function P0(e){return!e.validate}function J4(e){return e.map(c=>P0(c)?c:i=>c.validate(i))}function E0(e){if(!e)return null;let c=e.filter(X4);return c.length==0?null:function(i){return Q4(K4(i,c))}}function H3(e){return e!=null?E0(J4(e)):null}function B0(e){if(!e)return null;let c=e.filter(X4);return c.length==0?null:function(i){let a=K4(i,c).map(Y4);return t4(a).pipe(r4(Q4))}}function z3(e){return e!=null?B0(J4(e)):null}function E4(e,c){return e===null?[c]:Array.isArray(e)?[...e,c]:[e,c]}function I0(e){return e._rawValidators}function R0(e){return e._rawAsyncValidators}function d3(e){return e?Array.isArray(e)?e:[e]:[]}function N1(e,c){return Array.isArray(e)?e.includes(c):e===c}function B4(e,c){let i=d3(c);return d3(e).forEach(r=>{N1(i,r)||i.push(r)}),i}function I4(e,c){return d3(c).filter(i=>!N1(e,i))}var S1=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(c){this._rawValidators=c||[],this._composedValidatorFn=H3(this._rawValidators)}_setAsyncValidators(c){this._rawAsyncValidators=c||[],this._composedAsyncValidatorFn=z3(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(c){this._onDestroyCallbacks.push(c)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(c=>c()),this._onDestroyCallbacks=[]}reset(c=void 0){this.control&&this.control.reset(c)}hasError(c,i){return this.control?this.control.hasError(c,i):!1}getError(c,i){return this.control?this.control.getError(c,i):null}},D2=class extends S1{get formDirective(){return null}get path(){return null}},e1=class extends S1{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},w1=class{constructor(c){this._cd=c}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},O0={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},j7=U(S({},O0),{"[class.ng-submitted]":"isSubmitted"}),D1=(()=>{let c=class c extends w1{constructor(a){super(a)}};c.\u0275fac=function(r){return new(r||c)(z(e1,2))},c.\u0275dir=j({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,t){r&2&&d1("ng-untouched",t.isUntouched)("ng-touched",t.isTouched)("ng-pristine",t.isPristine)("ng-dirty",t.isDirty)("ng-valid",t.isValid)("ng-invalid",t.isInvalid)("ng-pending",t.isPending)},features:[l2]});let e=c;return e})(),Z4=(()=>{let c=class c extends w1{constructor(a){super(a)}};c.\u0275fac=function(r){return new(r||c)(z(D2,10))},c.\u0275dir=j({type:c,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,t){r&2&&d1("ng-untouched",t.isUntouched)("ng-touched",t.isTouched)("ng-pristine",t.isPristine)("ng-dirty",t.isDirty)("ng-valid",t.isValid)("ng-invalid",t.isInvalid)("ng-pending",t.isPending)("ng-submitted",t.isSubmitted)},features:[l2]});let e=c;return e})();var J2="VALID",y1="INVALID",A2="PENDING",Z2="DISABLED";function c6(e){return(T1(e)?e.validators:e)||null}function U0(e){return Array.isArray(e)?H3(e):e||null}function e6(e,c){return(T1(c)?c.asyncValidators:e)||null}function G0(e){return Array.isArray(e)?z3(e):e||null}function T1(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function j0(e,c,i){let a=e.controls;if(!(c?Object.keys(a):a).length)throw new v1(1e3,"");if(!a[i])throw new v1(1001,"")}function W0(e,c,i){e._forEachChild((a,r)=>{if(i[r]===void 0)throw new v1(1002,"")})}var k1=class{constructor(c,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(c),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(c){this._rawValidators=this._composedValidatorFn=c}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(c){this._rawAsyncValidators=this._composedAsyncValidatorFn=c}get parent(){return this._parent}get valid(){return this.status===J2}get invalid(){return this.status===y1}get pending(){return this.status==A2}get disabled(){return this.status===Z2}get enabled(){return this.status!==Z2}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(c){this._assignValidators(c)}setAsyncValidators(c){this._assignAsyncValidators(c)}addValidators(c){this.setValidators(B4(c,this._rawValidators))}addAsyncValidators(c){this.setAsyncValidators(B4(c,this._rawAsyncValidators))}removeValidators(c){this.setValidators(I4(c,this._rawValidators))}removeAsyncValidators(c){this.setAsyncValidators(I4(c,this._rawAsyncValidators))}hasValidator(c){return N1(this._rawValidators,c)}hasAsyncValidator(c){return N1(this._rawAsyncValidators,c)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(c={}){this.touched=!0,this._parent&&!c.onlySelf&&this._parent.markAsTouched(c)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(c=>c.markAllAsTouched())}markAsUntouched(c={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}markAsDirty(c={}){this.pristine=!1,this._parent&&!c.onlySelf&&this._parent.markAsDirty(c)}markAsPristine(c={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}markAsPending(c={}){this.status=A2,c.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!c.onlySelf&&this._parent.markAsPending(c)}disable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=Z2,this.errors=null,this._forEachChild(a=>{a.disable(U(S({},c),{onlySelf:!0}))}),this._updateValue(),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(U(S({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(a=>a(!0))}enable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=J2,this._forEachChild(a=>{a.enable(U(S({},c),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent}),this._updateAncestors(U(S({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(a=>a(!1))}_updateAncestors(c){this._parent&&!c.onlySelf&&(this._parent.updateValueAndValidity(c),c.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(c){this._parent=c}getRawValue(){return this.value}updateValueAndValidity(c={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===J2||this.status===A2)&&this._runAsyncValidator(c.emitEvent)),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.updateValueAndValidity(c)}_updateTreeValidity(c={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(c)),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Z2:J2}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(c){if(this.asyncValidator){this.status=A2,this._hasOwnPendingAsyncValidator=!0;let i=Y4(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(a=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(a,{emitEvent:c})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(c,i={}){this.errors=c,this._updateControlsErrors(i.emitEvent!==!1)}get(c){let i=c;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((a,r)=>a&&a._find(r),this)}getError(c,i){let a=i?this.get(i):this;return a&&a.errors?a.errors[c]:null}hasError(c,i){return!!this.getError(c,i)}get root(){let c=this;for(;c._parent;)c=c._parent;return c}_updateControlsErrors(c){this.status=this._calculateStatus(),c&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(c)}_initObservables(){this.valueChanges=new J,this.statusChanges=new J}_calculateStatus(){return this._allControlsDisabled()?Z2:this.errors?y1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A2)?A2:this._anyControlsHaveStatus(y1)?y1:J2}_anyControlsHaveStatus(c){return this._anyControls(i=>i.status===c)}_anyControlsDirty(){return this._anyControls(c=>c.dirty)}_anyControlsTouched(){return this._anyControls(c=>c.touched)}_updatePristine(c={}){this.pristine=!this._anyControlsDirty(),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}_updateTouched(c={}){this.touched=this._anyControlsTouched(),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}_registerOnCollectionChange(c){this._onCollectionChange=c}_setUpdateStrategy(c){T1(c)&&c.updateOn!=null&&(this._updateOn=c.updateOn)}_parentMarkedDirty(c){let i=this._parent&&this._parent.dirty;return!c&&!!i&&!this._parent._anyControlsDirty()}_find(c){return null}_assignValidators(c){this._rawValidators=Array.isArray(c)?c.slice():c,this._composedValidatorFn=U0(this._rawValidators)}_assignAsyncValidators(c){this._rawAsyncValidators=Array.isArray(c)?c.slice():c,this._composedAsyncValidatorFn=G0(this._rawAsyncValidators)}},A1=class extends k1{constructor(c,i,a){super(c6(i),e6(a,i)),this.controls=c,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(c,i){return this.controls[c]?this.controls[c]:(this.controls[c]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(c,i,a={}){this.registerControl(c,i),this.updateValueAndValidity({emitEvent:a.emitEvent}),this._onCollectionChange()}removeControl(c,i={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(c,i,a={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],i&&this.registerControl(c,i),this.updateValueAndValidity({emitEvent:a.emitEvent}),this._onCollectionChange()}contains(c){return this.controls.hasOwnProperty(c)&&this.controls[c].enabled}setValue(c,i={}){W0(this,!0,c),Object.keys(c).forEach(a=>{j0(this,!0,a),this.controls[a].setValue(c[a],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(c,i={}){c!=null&&(Object.keys(c).forEach(a=>{let r=this.controls[a];r&&r.patchValue(c[a],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(c={},i={}){this._forEachChild((a,r)=>{a.reset(c?c[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(c,i,a)=>(c[a]=i.getRawValue(),c))}_syncPendingControls(){let c=this._reduceChildren(!1,(i,a)=>a._syncPendingControls()?!0:i);return c&&this.updateValueAndValidity({onlySelf:!0}),c}_forEachChild(c){Object.keys(this.controls).forEach(i=>{let a=this.controls[i];a&&c(a,i)})}_setUpControls(){this._forEachChild(c=>{c.setParent(this),c._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(c){for(let[i,a]of Object.entries(this.controls))if(this.contains(i)&&c(a))return!0;return!1}_reduceValue(){let c={};return this._reduceChildren(c,(i,a,r)=>((a.enabled||this.disabled)&&(i[r]=a.value),i))}_reduceChildren(c,i){let a=c;return this._forEachChild((r,t)=>{a=i(a,r,t)}),a}_allControlsDisabled(){for(let c of Object.keys(this.controls))if(this.controls[c].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(c){return this.controls.hasOwnProperty(c)?this.controls[c]:null}};var V3=new Y("CallSetDisabledState",{providedIn:"root",factory:()=>M3}),M3="always";function q0(e,c){return[...c.path,e]}function a6(e,c,i=M3){i6(e,c),c.valueAccessor.writeValue(e.value),(e.disabled||i==="always")&&c.valueAccessor.setDisabledState?.(e.disabled),X0(e,c),Q0(e,c),Y0(e,c),$0(e,c)}function R4(e,c){e.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(c)})}function $0(e,c){if(c.valueAccessor.setDisabledState){let i=a=>{c.valueAccessor.setDisabledState(a)};e.registerOnDisabledChange(i),c._registerOnDestroy(()=>{e._unregisterOnDisabledChange(i)})}}function i6(e,c){let i=I0(e);c.validator!==null?e.setValidators(E4(i,c.validator)):typeof i=="function"&&e.setValidators([i]);let a=R0(e);c.asyncValidator!==null?e.setAsyncValidators(E4(a,c.asyncValidator)):typeof a=="function"&&e.setAsyncValidators([a]);let r=()=>e.updateValueAndValidity();R4(c._rawValidators,r),R4(c._rawAsyncValidators,r)}function X0(e,c){c.valueAccessor.registerOnChange(i=>{e._pendingValue=i,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&r6(e,c)})}function Y0(e,c){c.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&r6(e,c),e.updateOn!=="submit"&&e.markAsTouched()})}function r6(e,c){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),c.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Q0(e,c){let i=(a,r)=>{c.valueAccessor.writeValue(a),r&&c.viewToModelUpdate(a)};e.registerOnChange(i),c._registerOnDestroy(()=>{e._unregisterOnChange(i)})}function K0(e,c){e==null,i6(e,c)}function J0(e,c){if(!e.hasOwnProperty("model"))return!1;let i=e.model;return i.isFirstChange()?!0:!Object.is(c,i.currentValue)}function Z0(e){return Object.getPrototypeOf(e.constructor)===D0}function c8(e,c){e._syncPendingControls(),c.forEach(i=>{let a=i.control;a.updateOn==="submit"&&a._pendingChange&&(i.viewToModelUpdate(a._pendingValue),a._pendingChange=!1)})}function e8(e,c){if(!c)return null;Array.isArray(c);let i,a,r;return c.forEach(t=>{t.constructor===T2?i=t:Z0(t)?a=t:r=t}),r||a||i||null}var a8={provide:D2,useExisting:p1(()=>C3)},c1=Promise.resolve(),C3=(()=>{let c=class c extends D2{constructor(a,r,t){super(),this.callSetDisabledState=t,this.submitted=!1,this._directives=new Set,this.ngSubmit=new J,this.form=new A1({},H3(a),z3(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(a){c1.then(()=>{let r=this._findContainer(a.path);a.control=r.registerControl(a.name,a.control),a6(a.control,a,this.callSetDisabledState),a.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(a)})}getControl(a){return this.form.get(a.path)}removeControl(a){c1.then(()=>{let r=this._findContainer(a.path);r&&r.removeControl(a.name),this._directives.delete(a)})}addFormGroup(a){c1.then(()=>{let r=this._findContainer(a.path),t=new A1({});K0(t,a),r.registerControl(a.name,t),t.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(a){c1.then(()=>{let r=this._findContainer(a.path);r&&r.removeControl(a.name)})}getFormGroup(a){return this.form.get(a.path)}updateModel(a,r){c1.then(()=>{this.form.get(a.path).setValue(r)})}setValue(a){this.control.setValue(a)}onSubmit(a){return this.submitted=!0,c8(this.form,this._directives),this.ngSubmit.emit(a),a?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(a=void 0){this.form.reset(a),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(a){return a.pop(),a.length?this.form.get(a):this.form}};c.\u0275fac=function(r){return new(r||c)(z(q4,10),z($4,10),z(V3,8))},c.\u0275dir=j({type:c,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,t){r&1&&w("submit",function(n){return t.onSubmit(n)})("reset",function(){return t.onReset()})},inputs:{options:[W2.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[H1([a8]),l2]});let e=c;return e})();function O4(e,c){let i=e.indexOf(c);i>-1&&e.splice(i,1)}function U4(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var i8=class extends k1{constructor(c=null,i,a){super(c6(i),e6(a,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(c),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),T1(i)&&(i.nonNullable||i.initialValueIsDefault)&&(U4(c)?this.defaultValue=c.value:this.defaultValue=c)}setValue(c,i={}){this.value=this._pendingValue=c,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(a=>a(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(c,i={}){this.setValue(c,i)}reset(c=this.defaultValue,i={}){this._applyFormState(c),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(c){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(c){this._onChange.push(c)}_unregisterOnChange(c){O4(this._onChange,c)}registerOnDisabledChange(c){this._onDisabledChange.push(c)}_unregisterOnDisabledChange(c){O4(this._onDisabledChange,c)}_forEachChild(c){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(c){U4(c)?(this.value=this._pendingValue=c.value,c.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=c}};var r8={provide:e1,useExisting:p1(()=>a1)},G4=Promise.resolve(),a1=(()=>{let c=class c extends e1{constructor(a,r,t,s,n,o){super(),this._changeDetectorRef=n,this.callSetDisabledState=o,this.control=new i8,this._registered=!1,this.name="",this.update=new J,this._parent=a,this._setValidators(r),this._setAsyncValidators(t),this.valueAccessor=e8(this,s)}ngOnChanges(a){if(this._checkForErrors(),!this._registered||"name"in a){if(this._registered&&(this._checkName(),this.formDirective)){let r=a.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in a&&this._updateDisabled(a),J0(a,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(a){this.viewModel=a,this.update.emit(a)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){a6(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(a){G4.then(()=>{this.control.setValue(a,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(a){let r=a.isDisabled.currentValue,t=r!==0&&M4(r);G4.then(()=>{t&&!this.control.disabled?this.control.disable():!t&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(a){return this._parent?q0(a,this._parent):[a]}};c.\u0275fac=function(r){return new(r||c)(z(D2,9),z(q4,10),z($4,10),z(W4,10),z(V4,8),z(V3,8))},c.\u0275dir=j({type:c,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[W2.None,"disabled","isDisabled"],model:[W2.None,"ngModel","model"],options:[W2.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[H1([r8]),l2,o2]});let e=c;return e})(),t6=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=j({type:c,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let e=c;return e})();var t8=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=n2({type:c}),c.\u0275inj=s2({});let e=c;return e})();var _2=(()=>{let c=class c{static withConfig(a){return{ngModule:c,providers:[{provide:V3,useValue:a.callSetDisabledState??M3}]}}};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=n2({type:c}),c.\u0275inj=s2({imports:[t8]});let e=c;return e})();function n6(e,c){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);c&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),i.push.apply(i,a)}return i}function h(e){for(var c=1;c<arguments.length;c++){var i=arguments[c]!=null?arguments[c]:{};c%2?n6(Object(i),!0).forEach(function(a){k(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n6(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}function W1(e){"@babel/helpers - typeof";return W1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},W1(e)}function s8(e,c){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}function o6(e,c){for(var i=0;i<c.length;i++){var a=c[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n8(e,c,i){return c&&o6(e.prototype,c),i&&o6(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function k(e,c,i){return c in e?Object.defineProperty(e,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[c]=i,e}function E3(e,c){return l8(e)||m8(e,c)||T6(e,c)||u8()}function m1(e){return o8(e)||f8(e)||T6(e)||h8()}function o8(e){if(Array.isArray(e))return y3(e)}function l8(e){if(Array.isArray(e))return e}function f8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function m8(e,c){var i=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(i!=null){var a=[],r=!0,t=!1,s,n;try{for(i=i.call(e);!(r=(s=i.next()).done)&&(a.push(s.value),!(c&&a.length===c));r=!0);}catch(o){t=!0,n=o}finally{try{!r&&i.return!=null&&i.return()}finally{if(t)throw n}}return a}}function T6(e,c){if(e){if(typeof e=="string")return y3(e,c);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(e);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return y3(e,c)}}function y3(e,c){(c==null||c>e.length)&&(c=e.length);for(var i=0,a=new Array(c);i<c;i++)a[i]=e[i];return a}function h8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u8(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l6=function(){},B3={},_6={},F6=null,P6={mark:l6,measure:l6};try{typeof window<"u"&&(B3=window),typeof document<"u"&&(_6=document),typeof MutationObserver<"u"&&(F6=MutationObserver),typeof performance<"u"&&(P6=performance)}catch{}var v8=B3.navigator||{},f6=v8.userAgent,m6=f6===void 0?"":f6,u2=B3,y=_6,h6=F6,_1=P6,$7=!!u2.document,i2=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",E6=~m6.indexOf("MSIE")||~m6.indexOf("Trident/"),F1,P1,E1,B1,I1,c2="___FONT_AWESOME___",N3=16,B6="fa",I6="svg-inline--fa",y2="data-fa-i2svg",S3="data-fa-pseudo-element",p8="data-fa-pseudo-element-pending",I3="data-prefix",R3="data-icon",u6="fontawesome-i2svg",d8="async",H8=["HTML","HEAD","STYLE","SCRIPT"],R6=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),b="classic",N="sharp",O3=[b,N];function h1(e){return new Proxy(e,{get:function(i,a){return a in i?i[a]:i[b]}})}var s1=h1((F1={},k(F1,b,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),k(F1,N,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),F1)),n1=h1((P1={},k(P1,b,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),k(P1,N,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),P1)),o1=h1((E1={},k(E1,b,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),k(E1,N,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),E1)),z8=h1((B1={},k(B1,b,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),k(B1,N,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),B1)),V8=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,O6="fa-layers-text",M8=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,C8=h1((I1={},k(I1,b,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),k(I1,N,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),I1)),U6=[1,2,3,4,5,6,7,8,9,10],g8=U6.concat([11,12,13,14,15,16,17,18,19,20]),L8=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],x2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l1=new Set;Object.keys(n1[b]).map(l1.add.bind(l1));Object.keys(n1[N]).map(l1.add.bind(l1));var x8=[].concat(O3,m1(l1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",x2.GROUP,x2.SWAP_OPACITY,x2.PRIMARY,x2.SECONDARY]).concat(U6.map(function(e){return"".concat(e,"x")})).concat(g8.map(function(e){return"w-".concat(e)})),r1=u2.FontAwesomeConfig||{};function b8(e){var c=y.querySelector("script["+e+"]");if(c)return c.getAttribute(e)}function y8(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}y&&typeof y.querySelector=="function"&&(v6=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],v6.forEach(function(e){var c=E3(e,2),i=c[0],a=c[1],r=y8(b8(i));r!=null&&(r1[a]=r)}));var v6,G6={styleDefault:"solid",familyDefault:"classic",cssPrefix:B6,replacementClass:I6,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};r1.familyPrefix&&(r1.cssPrefix=r1.familyPrefix);var B2=h(h({},G6),r1);B2.autoReplaceSvg||(B2.observeMutations=!1);var p={};Object.keys(G6).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(i){B2[e]=i,t1.forEach(function(a){return a(p)})},get:function(){return B2[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(c){B2.cssPrefix=c,t1.forEach(function(i){return i(p)})},get:function(){return B2.cssPrefix}});u2.FontAwesomeConfig=p;var t1=[];function N8(e){return t1.push(e),function(){t1.splice(t1.indexOf(e),1)}}var h2=N3,Q={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function S8(e){if(!(!e||!i2)){var c=y.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=e;for(var i=y.head.childNodes,a=null,r=i.length-1;r>-1;r--){var t=i[r],s=(t.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=t)}return y.head.insertBefore(c,a),e}}var w8="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function f1(){for(var e=12,c="";e-- >0;)c+=w8[Math.random()*62|0];return c}function I2(e){for(var c=[],i=(e||[]).length>>>0;i--;)c[i]=e[i];return c}function U3(e){return e.classList?I2(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(c){return c})}function j6(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function k8(e){return Object.keys(e||{}).reduce(function(c,i){return c+"".concat(i,'="').concat(j6(e[i]),'" ')},"").trim()}function X1(e){return Object.keys(e||{}).reduce(function(c,i){return c+"".concat(i,": ").concat(e[i].trim(),";")},"")}function G3(e){return e.size!==Q.size||e.x!==Q.x||e.y!==Q.y||e.rotate!==Q.rotate||e.flipX||e.flipY}function A8(e){var c=e.transform,i=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(i/2," 256)")},t="translate(".concat(c.x*32,", ").concat(c.y*32,") "),s="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),n="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(t," ").concat(s," ").concat(n)},m={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:o,path:m}}function D8(e){var c=e.transform,i=e.width,a=i===void 0?N3:i,r=e.height,t=r===void 0?N3:r,s=e.startCentered,n=s===void 0?!1:s,o="";return n&&E6?o+="translate(".concat(c.x/h2-a/2,"em, ").concat(c.y/h2-t/2,"em) "):n?o+="translate(calc(-50% + ".concat(c.x/h2,"em), calc(-50% + ").concat(c.y/h2,"em)) "):o+="translate(".concat(c.x/h2,"em, ").concat(c.y/h2,"em) "),o+="scale(".concat(c.size/h2*(c.flipX?-1:1),", ").concat(c.size/h2*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var T8=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function W6(){var e=B6,c=I6,i=p.cssPrefix,a=p.replacementClass,r=T8;if(i!==e||a!==c){var t=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),n=new RegExp("\\.".concat(c),"g");r=r.replace(t,".".concat(i,"-")).replace(s,"--".concat(i,"-")).replace(n,".".concat(a))}return r}var p6=!1;function g3(){p.autoAddCss&&!p6&&(S8(W6()),p6=!0)}var _8={mixout:function(){return{dom:{css:W6,insertCss:g3}}},hooks:function(){return{beforeDOMElementCreation:function(){g3()},beforeI2svg:function(){g3()}}}},e2=u2||{};e2[c2]||(e2[c2]={});e2[c2].styles||(e2[c2].styles={});e2[c2].hooks||(e2[c2].hooks={});e2[c2].shims||(e2[c2].shims=[]);var q=e2[c2],q6=[],F8=function e(){y.removeEventListener("DOMContentLoaded",e),q1=1,q6.map(function(c){return c()})},q1=!1;i2&&(q1=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),q1||y.addEventListener("DOMContentLoaded",F8));function P8(e){i2&&(q1?setTimeout(e,0):q6.push(e))}function u1(e){var c=e.tag,i=e.attributes,a=i===void 0?{}:i,r=e.children,t=r===void 0?[]:r;return typeof e=="string"?j6(e):"<".concat(c," ").concat(k8(a),">").concat(t.map(u1).join(""),"</").concat(c,">")}function d6(e,c,i){if(e&&e[c]&&e[c][i])return{prefix:c,iconName:i,icon:e[c][i]}}var E8=function(c,i){return function(a,r,t,s){return c.call(i,a,r,t,s)}},L3=function(c,i,a,r){var t=Object.keys(c),s=t.length,n=r!==void 0?E8(i,r):i,o,m,l;for(a===void 0?(o=1,l=c[t[0]]):(o=0,l=a);o<s;o++)m=t[o],l=n(l,c[m],m,c);return l};function B8(e){for(var c=[],i=0,a=e.length;i<a;){var r=e.charCodeAt(i++);if(r>=55296&&r<=56319&&i<a){var t=e.charCodeAt(i++);(t&64512)==56320?c.push(((r&1023)<<10)+(t&1023)+65536):(c.push(r),i--)}else c.push(r)}return c}function w3(e){var c=B8(e);return c.length===1?c[0].toString(16):null}function I8(e,c){var i=e.length,a=e.charCodeAt(c),r;return a>=55296&&a<=56319&&i>c+1&&(r=e.charCodeAt(c+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function H6(e){return Object.keys(e).reduce(function(c,i){var a=e[i],r=!!a.icon;return r?c[a.iconName]=a.icon:c[i]=a,c},{})}function k3(e,c){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=i.skipHooks,r=a===void 0?!1:a,t=H6(c);typeof q.hooks.addPack=="function"&&!r?q.hooks.addPack(e,H6(c)):q.styles[e]=h(h({},q.styles[e]||{}),t),e==="fas"&&k3("fa",c)}var R1,O1,U1,F2=q.styles,R8=q.shims,O8=(R1={},k(R1,b,Object.values(o1[b])),k(R1,N,Object.values(o1[N])),R1),j3=null,$6={},X6={},Y6={},Q6={},K6={},U8=(O1={},k(O1,b,Object.keys(s1[b])),k(O1,N,Object.keys(s1[N])),O1);function G8(e){return~x8.indexOf(e)}function j8(e,c){var i=c.split("-"),a=i[0],r=i.slice(1).join("-");return a===e&&r!==""&&!G8(r)?r:null}var J6=function(){var c=function(t){return L3(F2,function(s,n,o){return s[o]=L3(n,t,{}),s},{})};$6=c(function(r,t,s){if(t[3]&&(r[t[3]]=s),t[2]){var n=t[2].filter(function(o){return typeof o=="number"});n.forEach(function(o){r[o.toString(16)]=s})}return r}),X6=c(function(r,t,s){if(r[s]=s,t[2]){var n=t[2].filter(function(o){return typeof o=="string"});n.forEach(function(o){r[o]=s})}return r}),K6=c(function(r,t,s){var n=t[2];return r[s]=s,n.forEach(function(o){r[o]=s}),r});var i="far"in F2||p.autoFetchSvg,a=L3(R8,function(r,t){var s=t[0],n=t[1],o=t[2];return n==="far"&&!i&&(n="fas"),typeof s=="string"&&(r.names[s]={prefix:n,iconName:o}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:n,iconName:o}),r},{names:{},unicodes:{}});Y6=a.names,Q6=a.unicodes,j3=Y1(p.styleDefault,{family:p.familyDefault})};N8(function(e){j3=Y1(e.styleDefault,{family:p.familyDefault})});J6();function W3(e,c){return($6[e]||{})[c]}function W8(e,c){return(X6[e]||{})[c]}function b2(e,c){return(K6[e]||{})[c]}function Z6(e){return Y6[e]||{prefix:null,iconName:null}}function q8(e){var c=Q6[e],i=W3("fas",e);return c||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function v2(){return j3}var q3=function(){return{prefix:null,iconName:null,rest:[]}};function Y1(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.family,a=i===void 0?b:i,r=s1[a][e],t=n1[a][e]||n1[a][r],s=e in q.styles?e:null;return t||s||null}var z6=(U1={},k(U1,b,Object.keys(o1[b])),k(U1,N,Object.keys(o1[N])),U1);function Q1(e){var c,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.skipLookups,r=a===void 0?!1:a,t=(c={},k(c,b,"".concat(p.cssPrefix,"-").concat(b)),k(c,N,"".concat(p.cssPrefix,"-").concat(N)),c),s=null,n=b;(e.includes(t[b])||e.some(function(m){return z6[b].includes(m)}))&&(n=b),(e.includes(t[N])||e.some(function(m){return z6[N].includes(m)}))&&(n=N);var o=e.reduce(function(m,l){var v=j8(p.cssPrefix,l);if(F2[l]?(l=O8[n].includes(l)?z8[n][l]:l,s=l,m.prefix=l):U8[n].indexOf(l)>-1?(s=l,m.prefix=Y1(l,{family:n})):v?m.iconName=v:l!==p.replacementClass&&l!==t[b]&&l!==t[N]&&m.rest.push(l),!r&&m.prefix&&m.iconName){var V=s==="fa"?Z6(m.iconName):{},g=b2(m.prefix,m.iconName);V.prefix&&(s=null),m.iconName=V.iconName||g||m.iconName,m.prefix=V.prefix||m.prefix,m.prefix==="far"&&!F2.far&&F2.fas&&!p.autoFetchSvg&&(m.prefix="fas")}return m},q3());return(e.includes("fa-brands")||e.includes("fab"))&&(o.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(o.prefix="fad"),!o.prefix&&n===N&&(F2.fass||p.autoFetchSvg)&&(o.prefix="fass",o.iconName=b2(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||s==="fa")&&(o.prefix=v2()||"fas"),o}var $8=function(){function e(){s8(this,e),this.definitions={}}return n8(e,[{key:"add",value:function(){for(var i=this,a=arguments.length,r=new Array(a),t=0;t<a;t++)r[t]=arguments[t];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(n){i.definitions[n]=h(h({},i.definitions[n]||{}),s[n]),k3(n,s[n]);var o=o1[b][n];o&&k3(o,s[n]),J6()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(t){var s=r[t],n=s.prefix,o=s.iconName,m=s.icon,l=m[2];i[n]||(i[n]={}),l.length>0&&l.forEach(function(v){typeof v=="string"&&(i[n][v]=m)}),i[n][o]=m}),i}}]),e}(),V6=[],P2={},E2={},X8=Object.keys(E2);function Y8(e,c){var i=c.mixoutsTo;return V6=e,P2={},Object.keys(E2).forEach(function(a){X8.indexOf(a)===-1&&delete E2[a]}),V6.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(i[s]=r[s]),W1(r[s])==="object"&&Object.keys(r[s]).forEach(function(n){i[s]||(i[s]={}),i[s][n]=r[s][n]})}),a.hooks){var t=a.hooks();Object.keys(t).forEach(function(s){P2[s]||(P2[s]=[]),P2[s].push(t[s])})}a.provides&&a.provides(E2)}),i}function A3(e,c){for(var i=arguments.length,a=new Array(i>2?i-2:0),r=2;r<i;r++)a[r-2]=arguments[r];var t=P2[e]||[];return t.forEach(function(s){c=s.apply(null,[c].concat(a))}),c}function N2(e){for(var c=arguments.length,i=new Array(c>1?c-1:0),a=1;a<c;a++)i[a-1]=arguments[a];var r=P2[e]||[];r.forEach(function(t){t.apply(null,i)})}function a2(){var e=arguments[0],c=Array.prototype.slice.call(arguments,1);return E2[e]?E2[e].apply(null,c):void 0}function D3(e){e.prefix==="fa"&&(e.prefix="fas");var c=e.iconName,i=e.prefix||v2();if(c)return c=b2(i,c)||c,d6(c0.definitions,i,c)||d6(q.styles,i,c)}var c0=new $8,Q8=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,N2("noAuto")},K8={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return i2?(N2("beforeI2svg",c),a2("pseudoElements2svg",c),a2("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,P8(function(){Z8({autoReplaceSvgRoot:i}),N2("watch",c)})}},J8={icon:function(c){if(c===null)return null;if(W1(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:b2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var i=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],a=Y1(c[0]);return{prefix:a,iconName:b2(a,i)||i}}if(typeof c=="string"&&(c.indexOf("".concat(p.cssPrefix,"-"))>-1||c.match(V8))){var r=Q1(c.split(" "),{skipLookups:!0});return{prefix:r.prefix||v2(),iconName:b2(r.prefix,r.iconName)||r.iconName}}if(typeof c=="string"){var t=v2();return{prefix:t,iconName:b2(t,c)||c}}}},O={noAuto:Q8,config:p,dom:K8,parse:J8,library:c0,findIconDefinition:D3,toHtml:u1},Z8=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot,a=i===void 0?y:i;(Object.keys(q.styles).length>0||p.autoFetchSvg)&&i2&&p.autoReplaceSvg&&O.dom.i2svg({node:a})};function K1(e,c){return Object.defineProperty(e,"abstract",{get:c}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return u1(a)})}}),Object.defineProperty(e,"node",{get:function(){if(i2){var a=y.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function c5(e){var c=e.children,i=e.main,a=e.mask,r=e.attributes,t=e.styles,s=e.transform;if(G3(s)&&i.found&&!a.found){var n=i.width,o=i.height,m={x:n/o/2,y:.5};r.style=X1(h(h({},t),{},{"transform-origin":"".concat(m.x+s.x/16,"em ").concat(m.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:c}]}function e5(e){var c=e.prefix,i=e.iconName,a=e.children,r=e.attributes,t=e.symbol,s=t===!0?"".concat(c,"-").concat(p.cssPrefix,"-").concat(i):t;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},r),{},{id:s}),children:a}]}]}function $3(e){var c=e.icons,i=c.main,a=c.mask,r=e.prefix,t=e.iconName,s=e.transform,n=e.symbol,o=e.title,m=e.maskId,l=e.titleId,v=e.extra,V=e.watchable,g=V===void 0?!1:V,A=a.found?a:i,P=A.width,E=A.height,$=r==="fak",_=[p.replacementClass,t?"".concat(p.cssPrefix,"-").concat(t):""].filter(function(r2){return v.classes.indexOf(r2)===-1}).filter(function(r2){return r2!==""||!!r2}).concat(v.classes).join(" "),B={children:[],attributes:h(h({},v.attributes),{},{"data-prefix":r,"data-icon":t,class:_,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(E)})},X=$&&!~v.classes.indexOf("fa-fw")?{width:"".concat(P/E*16*.0625,"em")}:{};g&&(B.attributes[y2]=""),o&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(l||f1())},children:[o]}),delete B.attributes.title);var R=h(h({},B),{},{prefix:r,iconName:t,main:i,mask:a,maskId:m,transform:s,symbol:n,styles:h(h({},X),v.styles)}),H2=a.found&&i.found?a2("generateAbstractMask",R)||{children:[],attributes:{}}:a2("generateAbstractIcon",R)||{children:[],attributes:{}},z2=H2.children,s3=H2.attributes;return R.children=z2,R.attributes=s3,n?e5(R):c5(R)}function M6(e){var c=e.content,i=e.width,a=e.height,r=e.transform,t=e.title,s=e.extra,n=e.watchable,o=n===void 0?!1:n,m=h(h(h({},s.attributes),t?{title:t}:{}),{},{class:s.classes.join(" ")});o&&(m[y2]="");var l=h({},s.styles);G3(r)&&(l.transform=D8({transform:r,startCentered:!0,width:i,height:a}),l["-webkit-transform"]=l.transform);var v=X1(l);v.length>0&&(m.style=v);var V=[];return V.push({tag:"span",attributes:m,children:[c]}),t&&V.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),V}function a5(e){var c=e.content,i=e.title,a=e.extra,r=h(h(h({},a.attributes),i?{title:i}:{}),{},{class:a.classes.join(" ")}),t=X1(a.styles);t.length>0&&(r.style=t);var s=[];return s.push({tag:"span",attributes:r,children:[c]}),i&&s.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),s}var x3=q.styles;function T3(e){var c=e[0],i=e[1],a=e.slice(4),r=E3(a,1),t=r[0],s=null;return Array.isArray(t)?s={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(x2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(x2.SECONDARY),fill:"currentColor",d:t[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(x2.PRIMARY),fill:"currentColor",d:t[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:t}},{found:!0,width:c,height:i,icon:s}}var i5={found:!1,width:512,height:512};function r5(e,c){!R6&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(c,'" is missing.'))}function _3(e,c){var i=c;return c==="fa"&&p.styleDefault!==null&&(c=v2()),new Promise(function(a,r){var t={found:!1,width:512,height:512,icon:a2("missingIconAbstract")||{}};if(i==="fa"){var s=Z6(e)||{};e=s.iconName||e,c=s.prefix||c}if(e&&c&&x3[c]&&x3[c][e]){var n=x3[c][e];return a(T3(n))}r5(e,c),a(h(h({},i5),{},{icon:p.showMissingIcons&&e?a2("missingIconAbstract")||{}:{}}))})}var C6=function(){},F3=p.measurePerformance&&_1&&_1.mark&&_1.measure?_1:{mark:C6,measure:C6},i1='FA "6.5.2"',t5=function(c){return F3.mark("".concat(i1," ").concat(c," begins")),function(){return e0(c)}},e0=function(c){F3.mark("".concat(i1," ").concat(c," ends")),F3.measure("".concat(i1," ").concat(c),"".concat(i1," ").concat(c," begins"),"".concat(i1," ").concat(c," ends"))},X3={begin:t5,end:e0},G1=function(){};function g6(e){var c=e.getAttribute?e.getAttribute(y2):null;return typeof c=="string"}function s5(e){var c=e.getAttribute?e.getAttribute(I3):null,i=e.getAttribute?e.getAttribute(R3):null;return c&&i}function n5(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function o5(){if(p.autoReplaceSvg===!0)return j1.replace;var e=j1[p.autoReplaceSvg];return e||j1.replace}function l5(e){return y.createElementNS("http://www.w3.org/2000/svg",e)}function f5(e){return y.createElement(e)}function a0(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.ceFn,a=i===void 0?e.tag==="svg"?l5:f5:i;if(typeof e=="string")return y.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(s){r.setAttribute(s,e.attributes[s])});var t=e.children||[];return t.forEach(function(s){r.appendChild(a0(s,{ceFn:a}))}),r}function m5(e){var c=" ".concat(e.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var j1={replace:function(c){var i=c[0];if(i.parentNode)if(c[1].forEach(function(r){i.parentNode.insertBefore(a0(r),i)}),i.getAttribute(y2)===null&&p.keepOriginalSource){var a=y.createComment(m5(i));i.parentNode.replaceChild(a,i)}else i.remove()},nest:function(c){var i=c[0],a=c[1];if(~U3(i).indexOf(p.replacementClass))return j1.replace(c);var r=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var t=a[0].attributes.class.split(" ").reduce(function(n,o){return o===p.replacementClass||o.match(r)?n.toSvg.push(o):n.toNode.push(o),n},{toNode:[],toSvg:[]});a[0].attributes.class=t.toSvg.join(" "),t.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",t.toNode.join(" "))}var s=a.map(function(n){return u1(n)}).join(`
`);i.setAttribute(y2,""),i.innerHTML=s}};function L6(e){e()}function i0(e,c){var i=typeof c=="function"?c:G1;if(e.length===0)i();else{var a=L6;p.mutateApproach===d8&&(a=u2.requestAnimationFrame||L6),a(function(){var r=o5(),t=X3.begin("mutate");e.map(r),t(),i()})}}var Y3=!1;function r0(){Y3=!0}function P3(){Y3=!1}var $1=null;function x6(e){if(h6&&p.observeMutations){var c=e.treeCallback,i=c===void 0?G1:c,a=e.nodeCallback,r=a===void 0?G1:a,t=e.pseudoElementsCallback,s=t===void 0?G1:t,n=e.observeMutationsRoot,o=n===void 0?y:n;$1=new h6(function(m){if(!Y3){var l=v2();I2(m).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!g6(v.addedNodes[0])&&(p.searchPseudoElements&&s(v.target),i(v.target)),v.type==="attributes"&&v.target.parentNode&&p.searchPseudoElements&&s(v.target.parentNode),v.type==="attributes"&&g6(v.target)&&~L8.indexOf(v.attributeName))if(v.attributeName==="class"&&s5(v.target)){var V=Q1(U3(v.target)),g=V.prefix,A=V.iconName;v.target.setAttribute(I3,g||l),A&&v.target.setAttribute(R3,A)}else n5(v.target)&&r(v.target)})}}),i2&&$1.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function h5(){$1&&$1.disconnect()}function u5(e){var c=e.getAttribute("style"),i=[];return c&&(i=c.split(";").reduce(function(a,r){var t=r.split(":"),s=t[0],n=t.slice(1);return s&&n.length>0&&(a[s]=n.join(":").trim()),a},{})),i}function v5(e){var c=e.getAttribute("data-prefix"),i=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=Q1(U3(e));return r.prefix||(r.prefix=v2()),c&&i&&(r.prefix=c,r.iconName=i),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=W8(r.prefix,e.innerText)||W3(r.prefix,w3(e.innerText))),!r.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function p5(e){var c=I2(e.attributes).reduce(function(r,t){return r.name!=="class"&&r.name!=="style"&&(r[t.name]=t.value),r},{}),i=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return p.autoA11y&&(i?c["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(a||f1()):(c["aria-hidden"]="true",c.focusable="false")),c}function d5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Q,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function b6(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=v5(e),a=i.iconName,r=i.prefix,t=i.rest,s=p5(e),n=A3("parseNodeAttributes",{},e),o=c.styleParser?u5(e):[];return h({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Q,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:t,styles:o,attributes:s}},n)}var H5=q.styles;function t0(e){var c=p.autoReplaceSvg==="nest"?b6(e,{styleParser:!1}):b6(e);return~c.extra.classes.indexOf(O6)?a2("generateLayersText",e,c):a2("generateSvgReplacementMutation",e,c)}var p2=new Set;O3.map(function(e){p2.add("fa-".concat(e))});Object.keys(s1[b]).map(p2.add.bind(p2));Object.keys(s1[N]).map(p2.add.bind(p2));p2=m1(p2);function y6(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!i2)return Promise.resolve();var i=y.documentElement.classList,a=function(v){return i.add("".concat(u6,"-").concat(v))},r=function(v){return i.remove("".concat(u6,"-").concat(v))},t=p.autoFetchSvg?p2:O3.map(function(l){return"fa-".concat(l)}).concat(Object.keys(H5));t.includes("fa")||t.push("fa");var s=[".".concat(O6,":not([").concat(y2,"])")].concat(t.map(function(l){return".".concat(l,":not([").concat(y2,"])")})).join(", ");if(s.length===0)return Promise.resolve();var n=[];try{n=I2(e.querySelectorAll(s))}catch{}if(n.length>0)a("pending"),r("complete");else return Promise.resolve();var o=X3.begin("onTree"),m=n.reduce(function(l,v){try{var V=t0(v);V&&l.push(V)}catch(g){R6||g.name==="MissingIcon"&&console.error(g)}return l},[]);return new Promise(function(l,v){Promise.all(m).then(function(V){i0(V,function(){a("active"),a("complete"),r("pending"),typeof c=="function"&&c(),o(),l()})}).catch(function(V){o(),v(V)})})}function z5(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;t0(e).then(function(i){i&&i0([i],c)})}function V5(e){return function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(c||{}).icon?c:D3(c||{}),r=i.mask;return r&&(r=(r||{}).icon?r:D3(r||{})),e(a,h(h({},i),{},{mask:r}))}}var M5=function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.transform,r=a===void 0?Q:a,t=i.symbol,s=t===void 0?!1:t,n=i.mask,o=n===void 0?null:n,m=i.maskId,l=m===void 0?null:m,v=i.title,V=v===void 0?null:v,g=i.titleId,A=g===void 0?null:g,P=i.classes,E=P===void 0?[]:P,$=i.attributes,_=$===void 0?{}:$,B=i.styles,X=B===void 0?{}:B;if(c){var R=c.prefix,H2=c.iconName,z2=c.icon;return K1(h({type:"icon"},c),function(){return N2("beforeDOMElementCreation",{iconDefinition:c,params:i}),p.autoA11y&&(V?_["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(A||f1()):(_["aria-hidden"]="true",_.focusable="false")),$3({icons:{main:T3(z2),mask:o?T3(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:H2,transform:h(h({},Q),r),symbol:s,title:V,maskId:l,titleId:A,extra:{attributes:_,styles:X,classes:E}})})}},C5={mixout:function(){return{icon:V5(M5)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=y6,i.nodeCallback=z5,i}}},provides:function(c){c.i2svg=function(i){var a=i.node,r=a===void 0?y:a,t=i.callback,s=t===void 0?function(){}:t;return y6(r,s)},c.generateSvgReplacementMutation=function(i,a){var r=a.iconName,t=a.title,s=a.titleId,n=a.prefix,o=a.transform,m=a.symbol,l=a.mask,v=a.maskId,V=a.extra;return new Promise(function(g,A){Promise.all([_3(r,n),l.iconName?_3(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var E=E3(P,2),$=E[0],_=E[1];g([i,$3({icons:{main:$,mask:_},prefix:n,iconName:r,transform:o,symbol:m,maskId:v,title:t,titleId:s,extra:V,watchable:!0})])}).catch(A)})},c.generateAbstractIcon=function(i){var a=i.children,r=i.attributes,t=i.main,s=i.transform,n=i.styles,o=X1(n);o.length>0&&(r.style=o);var m;return G3(s)&&(m=a2("generateAbstractTransformGrouping",{main:t,transform:s,containerWidth:t.width,iconWidth:t.width})),a.push(m||t.icon),{children:a,attributes:r}}}},g5={mixout:function(){return{layer:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,t=r===void 0?[]:r;return K1({type:"layer"},function(){N2("beforeDOMElementCreation",{assembler:i,params:a});var s=[];return i(function(n){Array.isArray(n)?n.map(function(o){s=s.concat(o.abstract)}):s=s.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(m1(t)).join(" ")},children:s}]})}}}},L5={mixout:function(){return{counter:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,t=r===void 0?null:r,s=a.classes,n=s===void 0?[]:s,o=a.attributes,m=o===void 0?{}:o,l=a.styles,v=l===void 0?{}:l;return K1({type:"counter",content:i},function(){return N2("beforeDOMElementCreation",{content:i,params:a}),a5({content:i.toString(),title:t,extra:{attributes:m,styles:v,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(m1(n))}})})}}}},x5={mixout:function(){return{text:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,t=r===void 0?Q:r,s=a.title,n=s===void 0?null:s,o=a.classes,m=o===void 0?[]:o,l=a.attributes,v=l===void 0?{}:l,V=a.styles,g=V===void 0?{}:V;return K1({type:"text",content:i},function(){return N2("beforeDOMElementCreation",{content:i,params:a}),M6({content:i,transform:h(h({},Q),t),title:n,extra:{attributes:v,styles:g,classes:["".concat(p.cssPrefix,"-layers-text")].concat(m1(m))}})})}}},provides:function(c){c.generateLayersText=function(i,a){var r=a.title,t=a.transform,s=a.extra,n=null,o=null;if(E6){var m=parseInt(getComputedStyle(i).fontSize,10),l=i.getBoundingClientRect();n=l.width/m,o=l.height/m}return p.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([i,M6({content:i.innerHTML,width:n,height:o,transform:t,title:r,extra:s,watchable:!0})])}}},b5=new RegExp('"',"ug"),N6=[1105920,1112319];function y5(e){var c=e.replace(b5,""),i=I8(c,0),a=i>=N6[0]&&i<=N6[1],r=c.length===2?c[0]===c[1]:!1;return{value:w3(r?c[0]:c),isSecondary:a||r}}function S6(e,c){var i="".concat(p8).concat(c.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(i)!==null)return a();var t=I2(e.children),s=t.filter(function(z2){return z2.getAttribute(S3)===c})[0],n=u2.getComputedStyle(e,c),o=n.getPropertyValue("font-family").match(M8),m=n.getPropertyValue("font-weight"),l=n.getPropertyValue("content");if(s&&!o)return e.removeChild(s),a();if(o&&l!=="none"&&l!==""){var v=n.getPropertyValue("content"),V=~["Sharp"].indexOf(o[2])?N:b,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?n1[V][o[2].toLowerCase()]:C8[V][m],A=y5(v),P=A.value,E=A.isSecondary,$=o[0].startsWith("FontAwesome"),_=W3(g,P),B=_;if($){var X=q8(P);X.iconName&&X.prefix&&(_=X.iconName,g=X.prefix)}if(_&&!E&&(!s||s.getAttribute(I3)!==g||s.getAttribute(R3)!==B)){e.setAttribute(i,B),s&&e.removeChild(s);var R=d5(),H2=R.extra;H2.attributes[S3]=c,_3(_,g).then(function(z2){var s3=$3(h(h({},R),{},{icons:{main:z2,mask:q3()},prefix:g,iconName:B,extra:H2,watchable:!0})),r2=y.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?e.insertBefore(r2,e.firstChild):e.appendChild(r2),r2.outerHTML=s3.map(function(A0){return u1(A0)}).join(`
`),e.removeAttribute(i),a()}).catch(r)}else a()}else a()})}function N5(e){return Promise.all([S6(e,"::before"),S6(e,"::after")])}function S5(e){return e.parentNode!==document.head&&!~H8.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(S3)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function w6(e){if(i2)return new Promise(function(c,i){var a=I2(e.querySelectorAll("*")).filter(S5).map(N5),r=X3.begin("searchPseudoElements");r0(),Promise.all(a).then(function(){r(),P3(),c()}).catch(function(){r(),P3(),i()})})}var w5={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=w6,i}}},provides:function(c){c.pseudoElements2svg=function(i){var a=i.node,r=a===void 0?y:a;p.searchPseudoElements&&w6(r)}}},k6=!1,k5={mixout:function(){return{dom:{unwatch:function(){r0(),k6=!0}}}},hooks:function(){return{bootstrap:function(){x6(A3("mutationObserverCallbacks",{}))},noAuto:function(){h5()},watch:function(i){var a=i.observeMutationsRoot;k6?P3():x6(A3("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},A6=function(c){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(a,r){var t=r.toLowerCase().split("-"),s=t[0],n=t.slice(1).join("-");if(s&&n==="h")return a.flipX=!0,a;if(s&&n==="v")return a.flipY=!0,a;if(n=parseFloat(n),isNaN(n))return a;switch(s){case"grow":a.size=a.size+n;break;case"shrink":a.size=a.size-n;break;case"left":a.x=a.x-n;break;case"right":a.x=a.x+n;break;case"up":a.y=a.y-n;break;case"down":a.y=a.y+n;break;case"rotate":a.rotate=a.rotate+n;break}return a},i)},A5={mixout:function(){return{parse:{transform:function(i){return A6(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,a){var r=a.getAttribute("data-fa-transform");return r&&(i.transform=A6(r)),i}}},provides:function(c){c.generateAbstractTransformGrouping=function(i){var a=i.main,r=i.transform,t=i.containerWidth,s=i.iconWidth,n={transform:"translate(".concat(t/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),m="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(o," ").concat(m," ").concat(l)},V={transform:"translate(".concat(s/2*-1," -256)")},g={outer:n,inner:v,path:V};return{tag:"g",attributes:h({},g.outer),children:[{tag:"g",attributes:h({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:h(h({},a.icon.attributes),g.path)}]}]}}}},b3={x:0,y:0,width:"100%",height:"100%"};function D6(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||c)&&(e.attributes.fill="black"),e}function D5(e){return e.tag==="g"?e.children:[e]}var T5={hooks:function(){return{parseNodeAttributes:function(i,a){var r=a.getAttribute("data-fa-mask"),t=r?Q1(r.split(" ").map(function(s){return s.trim()})):q3();return t.prefix||(t.prefix=v2()),i.mask=t,i.maskId=a.getAttribute("data-fa-mask-id"),i}}},provides:function(c){c.generateAbstractMask=function(i){var a=i.children,r=i.attributes,t=i.main,s=i.mask,n=i.maskId,o=i.transform,m=t.width,l=t.icon,v=s.width,V=s.icon,g=A8({transform:o,containerWidth:v,iconWidth:m}),A={tag:"rect",attributes:h(h({},b3),{},{fill:"white"})},P=l.children?{children:l.children.map(D6)}:{},E={tag:"g",attributes:h({},g.inner),children:[D6(h({tag:l.tag,attributes:h(h({},l.attributes),g.path)},P))]},$={tag:"g",attributes:h({},g.outer),children:[E]},_="mask-".concat(n||f1()),B="clip-".concat(n||f1()),X={tag:"mask",attributes:h(h({},b3),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,$]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:B},children:D5(V)},X]};return a.push(R,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(B,")"),mask:"url(#".concat(_,")")},b3)}),{children:a,attributes:r}}}},_5={provides:function(c){var i=!1;u2.matchMedia&&(i=u2.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},t={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:h(h({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=h(h({},t),{},{attributeName:"opacity"}),n={tag:"circle",attributes:h(h({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||n.children.push({tag:"animate",attributes:h(h({},t),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},s),{},{values:"1;0;1;1;0;1;"})}),a.push(n),a.push({tag:"path",attributes:h(h({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:h(h({},s),{},{values:"1;0;0;0;0;1;"})}]}),i||a.push({tag:"path",attributes:h(h({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},F5={hooks:function(){return{parseNodeAttributes:function(i,a){var r=a.getAttribute("data-fa-symbol"),t=r===null?!1:r===""?!0:r;return i.symbol=t,i}}}},P5=[_8,C5,g5,L5,x5,w5,k5,A5,T5,_5,F5];Y8(P5,{mixoutsTo:O});var X7=O.noAuto,Y7=O.config,Q7=O.library,K7=O.dom,s0=O.parse,J7=O.findIconDefinition,Z7=O.toHtml,n0=O.icon,cc=O.layer,E5=O.text,B5=O.counter;var R5=["*"],O5=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)},U5=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},G5=e=>{let c={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith("spin"),"fa-spin":e.animation==="spin"||e.animation==="spin-reverse","fa-spin-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-spin-reverse":e.animation==="spin-reverse"||e.animation==="spin-pulse-reverse","fa-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==null,[`fa-rotate-${e.rotate}`]:e.rotate!==null,[`fa-pull-${e.pull}`]:e.pull!==null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(c).map(i=>c[i]?i:null).filter(i=>i)},j5=e=>e.prefix!==void 0&&e.iconName!==void 0,W5=(e,c)=>j5(e)?e:typeof e=="string"?{prefix:c,iconName:e}:{prefix:e[0],iconName:e[1]},q5=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=I({token:c,factory:c.\u0275fac,providedIn:"root"});let e=c;return e})(),$5=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...a){for(let r of a){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let t of r.icon[2])typeof t=="string"&&(this.definitions[r.prefix][t]=r)}}addIconPacks(...a){for(let r of a){let t=Object.keys(r).map(s=>r[s]);this.addIcons(...t)}}getIconDefinition(a,r){return a in this.definitions&&r in this.definitions[a]?this.definitions[a][r]:null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=I({token:c,factory:c.\u0275fac,providedIn:"root"});let e=c;return e})(),X5=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(a){if("size"in a)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=j({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[o2]});let e=c;return e})(),Y5=(()=>{let c=class c{constructor(a,r){this.renderer=a,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(a){"size"in a&&(a.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${a.size.currentValue}`),a.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${a.size.previousValue}`))}};c.\u0275fac=function(r){return new(r||c)(z(X2),z(w2))},c.\u0275cmp=L({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[o2,x],ngContentSelectors:R5,decls:1,vars:0,template:function(r,t){r&1&&(m4(),h4(0))},encapsulation:2});let e=c;return e})(),d2=(()=>{let c=class c{set spin(a){this.animation=a?"spin":void 0}set pulse(a){this.animation=a?"spin-pulse":void 0}constructor(a,r,t,s,n){this.sanitizer=a,this.config=r,this.iconLibrary=t,this.stackItem=s,this.classes=[],n!=null&&s==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(a){if(this.icon==null&&this.config.fallbackIcon==null){U5();return}if(a){let r=this.icon!=null?this.icon:this.config.fallbackIcon,t=this.findIconDefinition(r);if(t!=null){let s=this.buildParams();this.renderIcon(t,s)}}}render(){this.ngOnChanges({})}findIconDefinition(a){let r=W5(a,this.config.defaultPrefix);if("icon"in r)return r;let t=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return t??(O5(r),null)}buildParams(){let a={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?s0.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...G5(a),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(a,r){let t=n0(a,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(t.html.join(`
`))}};c.\u0275fac=function(r){return new(r||c)(z(g1),z(q5),z($5),z(X5,8),z(Y5,8))},c.\u0275cmp=L({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,t){r&2&&(l4("innerHTML",t.renderedIconHTML,$2),f2("title",t.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[o2,x],decls:0,vars:0,template:function(r,t){},encapsulation:2});let e=c;return e})();var K=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=n2({type:c}),c.\u0275inj=s2({});let e=c;return e})();var Z1={prefix:"fas",iconName:"ghost",icon:[384,512,[128123],"f6e2","M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2V192C0 86 86 0 192 0S384 86 384 192V462.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]};var c3={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]};var e3={prefix:"fas",iconName:"mug-hot",icon:[512,512,[9749],"f7b6","M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"]};var a3={prefix:"fas",iconName:"sort",icon:[320,512,["unsorted"],"f0dc","M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"]};var R2={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]};var i3={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]};var O2={prefix:"fas",iconName:"bell",icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"]};var U2={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]};var G2={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};var Q5={prefix:"fas",iconName:"mug-saucer",icon:[640,512,["coffee"],"f0f4","M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},r3=Q5;var o0=(()=>{let c=class c{constructor(){this.faUser=c3,this.faGhost=Z1,this.faMugHot=e3,this.faCoffee=r3,this.faSort=a3,this.faHouse=i3,this.faMagnifyingGlass=U2,this.faFilter=R2,this.faBell=O2,this.faChevronDown=G2}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-sidebar"]],standalone:!0,features:[x],decls:26,vars:5,consts:[[1,"sidebar"],[1,"logo"],["src","assets/images/logo.png","alt","",2,"width","70px"],[1,"list-group","list-group-flush"],[1,"list-group-item"],[1,"fa-lg",3,"icon"],["routerLink","/home"],["routerLink","/product"]],template:function(r,t){r&1&&(f(0,"div",0)(1,"div",1),M(2,"img",2),u(),f(3,"ul",3)(4,"li",4),M(5,"fa-icon",5),f(6,"a",6)(7,"span"),H(8,"Home"),u()()(),f(9,"li",4),M(10,"fa-icon",5),f(11,"a",7)(12,"span"),H(13,"Product"),u()()(),f(14,"li",4),M(15,"fa-icon",5),f(16,"span"),H(17,"Contact"),u()(),f(18,"li",4),M(19,"fa-icon",5),f(20,"span"),H(21,"Bill"),u()(),f(22,"li",4),M(23,"fa-icon",5),f(24,"span"),H(25,"Client"),u()()()()),r&2&&(d(5),C("icon",t.faHouse),d(5),C("icon",t.faMugHot),d(5),C("icon",t.faSort),d(4),C("icon",t.faUser),d(4),C("icon",t.faGhost))},dependencies:[K,d2,b1],styles:["ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000;opacity:.9}"]});let e=c;return e})();var l0=(()=>{let c=class c{constructor(){this.date=new Date}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-productitem"]],inputs:{product:"product"},standalone:!0,features:[x],decls:22,vars:10,consts:[[1,"cart","row"],[1,"col-3"],["width","200","src","assets/images/img1.jpeg","alt",""],[1,"col-9","d-flex","flex-column","justify-content-between","cart-content"],[1,"d-flex","align-items-start"],[1,"cart-title"],[1,"townhouse"],[1,"d-flex","justify-content-between"],[1,"price"]],template:function(r,t){r&1&&(f(0,"div",0)(1,"div",1),M(2,"img",2),u(),f(3,"div",3)(4,"div")(5,"div",4)(6,"span",5),H(7),k2(8,"uppercase"),u(),f(9,"span"),H(10," - "),u(),f(11,"span",6),H(12,"Townhouse"),u()(),f(13,"small"),H(14,"2 bedrooms \u2022 2 bathrooms \u2022 240m2"),u()(),f(15,"div",7)(16,"span",8),H(17),k2(18,"currency"),u(),f(19,"small"),H(20),k2(21,"date"),u()()()()),r&2&&(d(7),F("",m3(8,3,t.product.name)," "),d(10),L2(m3(18,5,t.product.price)),d(3),F(" ",z1(21,7,t.date,"dd-MM-Y")," "))},dependencies:[m2,g4,x4,L4]});let e=c;return e})();var f0=(()=>{let c=class c{constructor(){this.searchParams=new J,this.faMagnifyingGlass=U2,this.q=""}handleSearch(){this.searchParams.emit(this.q)}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-search"]],outputs:{searchParams:"searchParams"},standalone:!0,features:[x],decls:3,vars:2,consts:[[1,"input-group","mb-3"],[1,"icon-search",3,"icon"],["type","text","placeholder","Search","aria-label","Text input with checkbox",1,"form-control",3,"keyup.enter","ngModelChange","ngModel"]],template:function(r,t){r&1&&(f(0,"div",0),M(1,"fa-icon",1),f(2,"input",2),w("keyup.enter",function(){return t.handleSearch()}),d4("ngModelChange",function(n){return p4(t.q,n)||(t.q=n),n}),u()()),r&2&&(d(),C("icon",t.faMagnifyingGlass),d(),v4("ngModel",t.q))},dependencies:[K,d2,_2,T2,D1,a1]});let e=c;return e})();function K5(e,c){if(e&1){let i=g2();f(0,"app-productitem",5),w("click",function(){let r=M2(i).$implicit,t=D();return C2(t.handleClickItem(r))}),u()}if(e&2){let i=c.$implicit;C("product",i)}}var m0=(()=>{let c=class c{constructor(){this.productItem=new J,this.faFilter=R2,this.name="Iphone 14",this.params="",this.listProduct=[{name:"Iphone 11",price:1123632424},{name:"Iphone 10",price:6767676786},{name:"Iphone 13",price:455655565},{name:"Iphone 12",price:242455522}]}handleClickItem(a){console.log(a),this.productItem.emit(a)}getParamsSearch(a){this.params=a}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-content"]],outputs:{productItem:"productItem"},standalone:!0,features:[x],decls:11,vars:3,consts:[[1,"content"],[3,"searchParams"],[1,"d-flex","justify-content-between"],[3,"icon"],["routerLink","/product/detail",3,"product","click",4,"ngFor","ngForOf"],["routerLink","/product/detail",3,"click","product"]],template:function(r,t){r&1&&(f(0,"div",0)(1,"app-search",1),w("searchParams",function(n){return t.getParamsSearch(n)}),u(),f(2,"div",2)(3,"h5"),H(4,"All Listings "),u(),f(5,"small"),H(6),u(),f(7,"div"),M(8,"fa-icon",3),H(9," Filter "),u()(),W(10,K5,1,1,"app-productitem",4),u()),r&2&&(d(6),F('Searching " ',t.params,'" '),d(2),C("icon",t.faFilter),d(2),C("ngForOf",t.listProduct))},dependencies:[K,d2,l0,f0,m2,M1,b1],styles:[".empty[_ngcontent-%COMP%]{opacity:.5}"]});let e=c;return e})();var h0=(()=>{let c=class c{constructor(){this.faChevronDown=G2,this.faBell=O2}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-userinfo"]],standalone:!0,features:[x],decls:8,vars:2,consts:[[1,"d-flex","align-items-center","justify-content-end","user-info"],[1,"fa-xl",3,"icon"],[1,"avatar"],["src","assets/images/img1.jpeg","alt","Avatar"],[3,"icon"]],template:function(r,t){r&1&&(f(0,"div",0)(1,"div"),M(2,"fa-icon",1),u(),f(3,"div",2),M(4,"img",3),H(5," Pham Van Chien "),u(),f(6,"div"),M(7,"fa-icon",4),u()()),r&2&&(d(2),C("icon",t.faBell),d(5),C("icon",t.faChevronDown))},dependencies:[K,d2],styles:[".user-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-left:10px}"]});let e=c;return e})();var u0=(()=>{let c=class c{constructor(){this.count=1}ngDoCheck(){console.log("ngDoCheck")}ngOnChanges(a){console.log("ngOnChanges:  ",a)}ngOnInit(){console.log("ngOnInit")}handleClickCount(){this.count=this.count+1}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-productinfo"]],standalone:!0,features:[o2,x],decls:22,vars:3,consts:[[1,"content-info"],["src","assets/images/img1.jpeg","alt","info"],[1,"townhouse"],[1,"price"],[1,"d-flex","justify-content-end","align-items-end"],[1,"btn","btn-dark"],[1,"btn","btn-dark",3,"click"],["type","button",1,"btn","btn-dark","btn-detail"]],template:function(r,t){r&1&&(f(0,"div",0),M(1,"img",1),f(2,"h4"),H(3),u(),f(4,"p",2),H(5,"Apartment"),u(),f(6,"small"),H(7,"2 bedrooms \u2022 2 bathrooms \u2022 240m2"),u(),f(8,"p",3),H(9),u(),f(10,"p"),H(11," Follow the link below for a more detailed description. description of somebody/something a brief description of the software The name means \u2018no trees\u2019 and it is an accurate description of the island. Police have issued a description of the gunman. This is a film that defies description "),u(),f(12,"div",4)(13,"div")(14,"button",5),H(15,"-"),u(),H(16),f(17,"button",6),w("click",function(){return t.handleClickCount()}),H(18,"+"),u()(),f(19,"div")(20,"button",7),H(21,"Add Cart"),u()()()()),r&2&&(d(3),L2("Name"),d(6),L2(12324324353),d(7),F(" ",t.count," "))}});let e=c;return e})();var v0=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-detail"]],inputs:{productInfo:"productInfo"},standalone:!0,features:[x],decls:2,vars:0,template:function(r,t){r&1&&(f(0,"aside"),M(1,"app-productinfo"),u())},dependencies:[u0]});let e=c;return e})();var p0=(()=>{let c=class c{constructor(){this.faUser=c3,this.faGhost=Z1,this.faMugHot=e3,this.faCoffee=r3,this.faSort=a3,this.faHouse=i3,this.faMagnifyingGlass=U2,this.faFilter=R2,this.faBell=O2,this.faChevronDown=G2,this.productInfo={}}getProductItem(a){this.productInfo=a}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-root"]],standalone:!0,features:[x],decls:6,vars:0,consts:[[1,"d-flex"],[1,"col-2"],[1,"content"]],template:function(r,t){r&1&&(f(0,"main",0),M(1,"app-sidebar",1),f(2,"div",2)(3,"header"),M(4,"app-userinfo"),u(),M(5,"router-outlet"),u()())},dependencies:[A4,_2,K,o0,m2,h0],styles:[".content[_ngcontent-%COMP%]{width:100%}"]});let e=c;return e})();var J5=e=>({itemsPerPage:3,currentPage:e});function Z5(e,c){if(e&1&&(f(0,"li"),H(1),u()),e&2){let i=c.$implicit;d(),L2(i)}}var d0=(()=>{let c=class c{constructor(){this.p=1,this.list=["iphone 5","iphone 6","iphone 7","iphone 8","iphone 9","iphone 10","iphone 11","iphone 12"]}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-home"]],standalone:!0,features:[x],decls:6,vars:6,consts:[[4,"ngFor","ngForOf"],[3,"pageChange"]],template:function(r,t){r&1&&(f(0,"p"),H(1,"home works!"),u(),f(2,"ul"),W(3,Z5,2,1,"li",0),k2(4,"paginate"),u(),f(5,"pagination-controls",1),w("pageChange",function(n){return t.p=n}),u()),r&2&&(d(3),C("ngForOf",z1(4,1,t.list,H4(4,J5,t.p))))},dependencies:[P4,M1,F4,_4]});let e=c;return e})();var H0=(()=>{let c=class c{constructor(a){this.httpClient=a,this.url="http://localhost:8000/products"}getAllData(){let a=localStorage.getItem("token");return this.httpClient.get(this.url,{headers:{authorization:`Bearer ${a}`}})}};c.\u0275fac=function(r){return new(r||c)(G(C1))},c.\u0275prov=I({token:c,factory:c.\u0275fac,providedIn:"root"});let e=c;return e})();var z0=(()=>{let c=class c{constructor(a){this.productService=a}ngOnInit(){this.productService.getAllData().subscribe(a=>{console.log(a)})}};c.\u0275fac=function(r){return new(r||c)(z(H0))},c.\u0275cmp=L({type:c,selectors:[["app-product"]],standalone:!0,features:[x],decls:1,vars:0,consts:[[1,"col-7"]],template:function(r,t){r&1&&M(0,"app-content",0)},dependencies:[m0]});let e=c;return e})();var V0=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-page-not-found"]],standalone:!0,features:[x],decls:2,vars:0,template:function(r,t){r&1&&(f(0,"p"),H(1,"page-not-found works!"),u())}});let e=c;return e})();var M0=["toast-component",""];function a7(e,c){if(e&1){let i=g2();f(0,"button",5),w("click",function(){M2(i);let r=D();return C2(r.remove())}),f(1,"span",6),H(2,"\xD7"),u()()}}function i7(e,c){if(e&1&&(l3(0),H(1),f3()),e&2){let i=D(2);d(),F("[",i.duplicatesCount+1,"]")}}function r7(e,c){if(e&1&&(f(0,"div"),H(1),W(2,i7,2,1,"ng-container",4),u()),e&2){let i=D();Z(i.options.titleClass),f2("aria-label",i.title),d(),F(" ",i.title," "),d(),C("ngIf",i.duplicatesCount)}}function t7(e,c){if(e&1&&M(0,"div",7),e&2){let i=D();Z(i.options.messageClass),C("innerHTML",i.message,$2)}}function s7(e,c){if(e&1&&(f(0,"div",8),H(1),u()),e&2){let i=D();Z(i.options.messageClass),f2("aria-label",i.message),d(),F(" ",i.message," ")}}function n7(e,c){if(e&1&&(f(0,"div"),M(1,"div",9),u()),e&2){let i=D();d(),Q2("width",i.width()+"%")}}function o7(e,c){if(e&1){let i=g2();f(0,"button",5),w("click",function(){M2(i);let r=D();return C2(r.remove())}),f(1,"span",6),H(2,"\xD7"),u()()}}function l7(e,c){if(e&1&&(l3(0),H(1),f3()),e&2){let i=D(2);d(),F("[",i.duplicatesCount+1,"]")}}function f7(e,c){if(e&1&&(f(0,"div"),H(1),W(2,l7,2,1,"ng-container",4),u()),e&2){let i=D();Z(i.options.titleClass),f2("aria-label",i.title),d(),F(" ",i.title," "),d(),C("ngIf",i.duplicatesCount)}}function m7(e,c){if(e&1&&M(0,"div",7),e&2){let i=D();Z(i.options.messageClass),C("innerHTML",i.message,$2)}}function h7(e,c){if(e&1&&(f(0,"div",8),H(1),u()),e&2){let i=D();Z(i.options.messageClass),f2("aria-label",i.message),d(),F(" ",i.message," ")}}function u7(e,c){if(e&1&&(f(0,"div"),M(1,"div",9),u()),e&2){let i=D();d(),Q2("width",i.width()+"%")}}var K3=class{_attachedHost;component;viewContainerRef;injector;constructor(c,i){this.component=c,this.injector=i}attach(c,i){return this._attachedHost=c,c.attach(this,i)}detach(){let c=this._attachedHost;if(c)return this._attachedHost=void 0,c.detach()}get isAttached(){return this._attachedHost!=null}setAttachedHost(c){this._attachedHost=c}},J3=class{_attachedPortal;_disposeFn;attach(c,i){return this._attachedPortal=c,this.attachComponentPortal(c,i)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(c){this._disposeFn=c}},Z3=class{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new t2;_activate=new t2;_manualClose=new t2;_resetTimeout=new t2;_countDuplicate=new t2;constructor(c){this._overlayRef=c}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(c,i){c&&this._resetTimeout.next(),i&&this._countDuplicate.next(++this.duplicatesCount)}},j2=class{toastId;config;message;title;toastType;toastRef;_onTap=new t2;_onAction=new t2;constructor(c,i,a,r,t,s){this.toastId=c,this.config=i,this.message=a,this.title=r,this.toastType=t,this.toastRef=s,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(c){this._onAction.next(c)}onAction(){return this._onAction.asObservable()}},C0={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},g0=new Y("ToastConfig"),c4=class extends J3{_hostDomElement;_componentFactoryResolver;_appRef;constructor(c,i,a){super(),this._hostDomElement=c,this._componentFactoryResolver=i,this._appRef=a}attachComponentPortal(c,i){let a=this._componentFactoryResolver.resolveComponentFactory(c.component),r;return r=a.create(c.injector),this._appRef.attachView(r.hostView),this.setDisposeFn(()=>{this._appRef.detachView(r.hostView),r.destroy()}),i?this._hostDomElement.insertBefore(this._getComponentRootNode(r),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(r)),r}_getComponentRootNode(c){return c.hostView.rootNodes[0]}},v7=(()=>{class e{_document=V2(u3);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let i=this._document.createElement("div");i.classList.add("overlay-container"),i.setAttribute("aria-live","polite"),this._document.body.appendChild(i),this._containerElement=i}static \u0275fac=function(a){return new(a||e)};static \u0275prov=I({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),e4=class{_portalHost;constructor(c){this._portalHost=c}attach(c,i=!0){return this._portalHost.attach(c,i)}detach(){return this._portalHost.detach()}},p7=(()=>{class e{_overlayContainer=V2(v7);_componentFactoryResolver=V2(o4);_appRef=V2(V1);_document=V2(u3);_paneElements=new Map;create(i,a){return this._createOverlayRef(this.getPaneElement(i,a))}getPaneElement(i="",a){return this._paneElements.get(a)||this._paneElements.set(a,{}),this._paneElements.get(a)[i]||(this._paneElements.get(a)[i]=this._createPaneElement(i,a)),this._paneElements.get(a)[i]}_createPaneElement(i,a){let r=this._document.createElement("div");return r.id="toast-container",r.classList.add(i),r.classList.add("toast-container"),a?a.getContainerElement().appendChild(r):this._overlayContainer.getContainerElement().appendChild(r),r}_createPortalHost(i){return new c4(i,this._componentFactoryResolver,this._appRef)}_createOverlayRef(i){return new e4(this._createPortalHost(i))}static \u0275fac=function(a){return new(a||e)};static \u0275prov=I({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),t3=(()=>{class e{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(i,a,r,t,s){this.overlay=a,this._injector=r,this.sanitizer=t,this.ngZone=s,this.toastrConfig=S(S({},i.default),i.config),i.config.iconClasses&&(this.toastrConfig.iconClasses=S(S({},i.default.iconClasses),i.config.iconClasses))}show(i,a,r={},t=""){return this._preBuildNotification(t,i,a,this.applyConfig(r))}success(i,a,r={}){let t=this.toastrConfig.iconClasses.success||"";return this._preBuildNotification(t,i,a,this.applyConfig(r))}error(i,a,r={}){let t=this.toastrConfig.iconClasses.error||"";return this._preBuildNotification(t,i,a,this.applyConfig(r))}info(i,a,r={}){let t=this.toastrConfig.iconClasses.info||"";return this._preBuildNotification(t,i,a,this.applyConfig(r))}warning(i,a,r={}){let t=this.toastrConfig.iconClasses.warning||"";return this._preBuildNotification(t,i,a,this.applyConfig(r))}clear(i){for(let a of this.toasts)if(i!==void 0){if(a.toastId===i){a.toastRef.manualClose();return}}else a.toastRef.manualClose()}remove(i){let a=this._findToast(i);if(!a||(a.activeToast.toastRef.close(),this.toasts.splice(a.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){let r=this.toasts[this.currentlyActive].toastRef;r.isInactive()||(this.currentlyActive=this.currentlyActive+1,r.activate())}return!0}findDuplicate(i="",a="",r,t){let{includeTitleDuplicates:s}=this.toastrConfig;for(let n of this.toasts){let o=s&&n.title===i;if((!s||o)&&n.message===a)return n.toastRef.onDuplicate(r,t),n}return null}applyConfig(i={}){return S(S({},this.toastrConfig),i)}_findToast(i){for(let a=0;a<this.toasts.length;a++)if(this.toasts[a].toastId===i)return{index:a,activeToast:this.toasts[a]};return null}_preBuildNotification(i,a,r,t){return t.onActivateTick?this.ngZone.run(()=>this._buildNotification(i,a,r,t)):this._buildNotification(i,a,r,t)}_buildNotification(i,a,r,t){if(!t.toastComponent)throw new Error("toastComponent required");let s=this.findDuplicate(r,a,this.toastrConfig.resetTimeoutOnDuplicate&&t.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&r||a)&&this.toastrConfig.preventDuplicates&&s!==null)return s;this.previousToastMessage=a;let n=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(n=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));let o=this.overlay.create(t.positionClass,this.overlayContainer);this.index=this.index+1;let m=a;a&&t.enableHtml&&(m=this.sanitizer.sanitize(n4.HTML,a));let l=new Z3(o),v=new j2(this.index,t,m,r,i,l),V=[{provide:j2,useValue:v}],g=q2.create({providers:V,parent:this._injector}),A=new K3(t.toastComponent,g),P=o.attach(A,t.newestOnTop);l.componentInstance=P.instance;let E={toastId:this.index,title:r||"",message:a||"",toastRef:l,onShown:l.afterActivate(),onHidden:l.afterClosed(),onTap:v.onTap(),onAction:v.onAction(),portal:P};return n||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{E.toastRef.activate()})),this.toasts.push(E),E}static \u0275fac=function(a){return new(a||e)(G(g0),G(p7),G(q2),G(g1),G(o3))};static \u0275prov=I({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),d7=(()=>{class e{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=Y2(-1);toastClasses="";state;get _state(){return this.state()}get displayStyle(){if(this.state().value==="inactive")return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(i,a,r){this.toastrService=i,this.toastPackage=a,this.ngZone=r,this.message=a.message,this.title=a.title,this.options=a.config,this.originalTimeout=a.config.timeOut,this.toastClasses=`${a.toastType} ${a.config.toastClass}`,this.sub=a.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=a.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=a.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=a.toastRef.countDuplicate().subscribe(t=>{this.duplicatesCount=t}),this.state=Y2({value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.update(i=>U(S({},i),{value:"active"})),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let i=new Date().getTime(),a=this.hideTime-i;this.width.set(a/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(r=>100-r),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.update(i=>U(S({},i),{value:"active"})),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){this.state().value!=="removed"&&(clearTimeout(this.timeout),this.state.update(i=>U(S({},i),{value:"removed"})),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){this.state().value!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state().value!=="removed"&&this.options.disableTimeOut!=="extendedTimeOut"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state().value==="removed"||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(i,a){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(i),a)):this.timeout=setTimeout(()=>i(),a)}outsideInterval(i,a){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(i),a)):this.intervalId=setInterval(()=>i(),a)}runInsideAngular(i){this.ngZone?this.ngZone.run(()=>i()):i()}static \u0275fac=function(a){return new(a||e)(z(t3),z(j2),z(o3))};static \u0275cmp=L({type:e,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(a,r){a&1&&w("click",function(){return r.tapToast()})("mouseenter",function(){return r.stickAround()})("mouseleave",function(){return r.delayedHideToast()}),a&2&&(f4("@flyInOut",r._state),Z(r.toastClasses),Q2("display",r.displayStyle))},standalone:!0,features:[x],attrs:M0,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(a,r){a&1&&W(0,a7,3,0,"button",0)(1,r7,3,5,"div",1)(2,t7,1,3,"div",2)(3,s7,2,4,"div",3)(4,n7,2,2,"div",4),a&2&&(C("ngIf",r.options.closeButton),d(),C("ngIf",r.title),d(),C("ngIf",r.message&&r.options.enableHtml),d(),C("ngIf",r.message&&!r.options.enableHtml),d(),C("ngIf",r.options.progressBar))},dependencies:[K2],encapsulation:2,data:{animation:[S4("flyInOut",[x1("inactive",L1({opacity:0})),x1("active",L1({opacity:1})),x1("removed",L1({opacity:0})),p3("inactive => active",v3("{{ easeTime }}ms {{ easing }}")),p3("active => removed",v3("{{ easeTime }}ms {{ easing }}"))])]},changeDetection:0})}return e})(),H7=U(S({},C0),{toastComponent:d7}),a4=(e={})=>s4([{provide:g0,useValue:{default:H7,config:e}}]),L0=(()=>{class e{static forRoot(i={}){return{ngModule:e,providers:[a4(i)]}}static \u0275fac=function(a){return new(a||e)};static \u0275mod=n2({type:e});static \u0275inj=s2({})}return e})();var z7=(()=>{class e{toastrService;toastPackage;appRef;message;title;options;duplicatesCount;originalTimeout;width=Y2(-1);toastClasses="";get displayStyle(){return this.state()==="inactive"?"none":null}state=Y2("inactive");timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(i,a,r){this.toastrService=i,this.toastPackage=a,this.appRef=r,this.message=a.message,this.title=a.title,this.options=a.config,this.originalTimeout=a.config.timeOut,this.toastClasses=`${a.toastType} ${a.config.toastClass}`,this.sub=a.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=a.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=a.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=a.toastRef.countDuplicate().subscribe(t=>{this.duplicatesCount=t})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.set("active"),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.timeout=setTimeout(()=>{this.remove()},this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))),this.options.onActivateTick&&this.appRef.tick()}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let i=new Date().getTime(),a=this.hideTime-i;this.width.set(a/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(r=>100-r),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.set("active"),this.options.timeOut=this.originalTimeout,this.timeout=setTimeout(()=>this.remove(),this.originalTimeout),this.hideTime=new Date().getTime()+(this.originalTimeout||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))}remove(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.state.set("removed"),this.timeout=setTimeout(()=>this.toastrService.remove(this.toastPackage.toastId)))}tapToast(){this.state()!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state()==="removed"||(this.timeout=setTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10)))}static \u0275fac=function(a){return new(a||e)(z(t3),z(j2),z(V1))};static \u0275cmp=L({type:e,selectors:[["","toast-component",""]],hostVars:4,hostBindings:function(a,r){a&1&&w("click",function(){return r.tapToast()})("mouseenter",function(){return r.stickAround()})("mouseleave",function(){return r.delayedHideToast()}),a&2&&(Z(r.toastClasses),Q2("display",r.displayStyle))},standalone:!0,features:[x],attrs:M0,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(a,r){a&1&&W(0,o7,3,0,"button",0)(1,f7,3,5,"div",1)(2,m7,1,3,"div",2)(3,h7,2,4,"div",3)(4,u7,2,2,"div",4),a&2&&(C("ngIf",r.options.closeButton),d(),C("ngIf",r.title),d(),C("ngIf",r.message&&r.options.enableHtml),d(),C("ngIf",r.message&&!r.options.enableHtml),d(),C("ngIf",r.options.progressBar))},dependencies:[K2],encapsulation:2,changeDetection:0})}return e})(),u9=U(S({},C0),{toastComponent:z7});var x0=(()=>{let c=class c{constructor(a){this.httpService=a,this.url="http://localhost:8000/auth/"}register(a,r){return this.httpService.post(this.url+"register",{email:a,password:r})}};c.\u0275fac=function(r){return new(r||c)(G(C1))},c.\u0275prov=I({token:c,factory:c.\u0275fac,providedIn:"root"});let e=c;return e})();function C7(e,c){if(e&1&&(f(0,"div",6),H(1),u()),e&2){let i=D();d(),F(" ",i.err.error.message,`
`)}}var b0=(()=>{let c=class c{constructor(a,r,t){this.authenService=a,this.route=r,this.toastr=t}onSubmit(a){this.authenService.register(a.value.email,a.value.password).subscribe(r=>{this.toastr.success("Register succesfully!"),localStorage.setItem("token",r.access_token),this.route.navigate(["/home"])},r=>{this.err=r})}};c.\u0275fac=function(r){return new(r||c)(z(x0),z(D4),z(t3))},c.\u0275cmp=L({type:c,selectors:[["app-register"]],standalone:!0,features:[x],decls:14,vars:1,consts:[["formLogin","ngForm"],["class","alert alert-danger","role","alert",4,"ngIf"],[3,"ngSubmit"],["type","email","ngModel","","name","email",1,"form-control"],["type","password","ngModel","","name","password",1,"form-control"],["type","submit",1,"btn","btn-info"],["role","alert",1,"alert","alert-danger"]],template:function(r,t){if(r&1){let s=g2();f(0,"h1"),H(1,"Register Form"),u(),W(2,C7,2,1,"div",1),f(3,"form",2,0),w("ngSubmit",function(){M2(s);let o=u4(4);return C2(t.onSubmit(o))}),f(5,"label"),H(6,"Email"),u(),M(7,"input",3),f(8,"label"),H(9,"Password"),u(),M(10,"input",4)(11,"br"),f(12,"button",5),H(13,"Submit"),u()()}r&2&&(d(2),C("ngIf",t.err))},dependencies:[_2,t6,T2,D1,Z4,a1,C3,m2,K2,L0]});let e=c;return e})();var g7=new Y("JWT_OPTIONS"),y0=(()=>{class e{constructor(i=null){this.tokenGetter=i&&i.tokenGetter||function(){}}urlBase64Decode(i){let a=i.replace(/-/g,"+").replace(/_/g,"/");switch(a.length%4){case 0:break;case 2:{a+="==";break}case 3:{a+="=";break}default:throw new Error("Illegal base64url string!")}return this.b64DecodeUnicode(a)}b64decode(i){let a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="";if(i=String(i).replace(/=+$/,""),i.length%4===1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(let t=0,s,n,o=0;n=i.charAt(o++);~n&&(s=t%4?s*64+n:n,t++%4)?r+=String.fromCharCode(255&s>>(-2*t&6)):0)n=a.indexOf(n);return r}b64DecodeUnicode(i){return decodeURIComponent(Array.prototype.map.call(this.b64decode(i),a=>"%"+("00"+a.charCodeAt(0).toString(16)).slice(-2)).join(""))}decodeToken(i=this.tokenGetter()){return i instanceof Promise?i.then(a=>this._decodeToken(a)):this._decodeToken(i)}_decodeToken(i){if(!i||i==="")return null;let a=i.split(".");if(a.length!==3)throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");let r=this.urlBase64Decode(a[1]);if(!r)throw new Error("Cannot decode the token.");return JSON.parse(r)}getTokenExpirationDate(i=this.tokenGetter()){return i instanceof Promise?i.then(a=>this._getTokenExpirationDate(a)):this._getTokenExpirationDate(i)}_getTokenExpirationDate(i){let a;if(a=this.decodeToken(i),!a||!a.hasOwnProperty("exp"))return null;let r=new Date(0);return r.setUTCSeconds(a.exp),r}isTokenExpired(i=this.tokenGetter(),a){return i instanceof Promise?i.then(r=>this._isTokenExpired(r,a)):this._isTokenExpired(i,a)}_isTokenExpired(i,a){if(!i||i==="")return!0;let r=this.getTokenExpirationDate(i);return a=a||0,r===null?!1:!(r.valueOf()>new Date().valueOf()+a*1e3)}getAuthScheme(i,a){return typeof i=="function"?i(a):i}}return e.\u0275fac=function(i){return new(i||e)(G(g7))},e.\u0275prov=I({token:e,factory:e.\u0275fac}),e})();var S2=class extends Error{};S2.prototype.name="InvalidTokenError";function L7(e){return decodeURIComponent(atob(e).replace(/(.)/g,(c,i)=>{let a=i.charCodeAt(0).toString(16).toUpperCase();return a.length<2&&(a="0"+a),"%"+a}))}function x7(e){let c=e.replace(/-/g,"+").replace(/_/g,"/");switch(c.length%4){case 0:break;case 2:c+="==";break;case 3:c+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return L7(c)}catch{return atob(c)}}function N0(e,c){if(typeof e!="string")throw new S2("Invalid token specified: must be a string");c||(c={});let i=c.header===!0?0:1,a=e.split(".")[i];if(typeof a!="string")throw new S2(`Invalid token specified: missing part #${i+1}`);let r;try{r=x7(a)}catch(t){throw new S2(`Invalid token specified: invalid base64 for part #${i+1} (${t.message})`)}try{return JSON.parse(r)}catch(t){throw new S2(`Invalid token specified: invalid json for part #${i+1} (${t.message})`)}}var b7=(e,c)=>{let i=localStorage.getItem("token"),a=N0(i);console.log(a);let r=new y0;return console.log(r.isTokenExpired(i)),i?i?a.role==1&&!r.isTokenExpired(i):!1:!0},S0=[{path:"register",component:b0},{path:"home",component:d0,loadChildren:()=>import("./chunk-5BQRBEPG.mjs").then(e=>e.SharedModule)},{path:"product",component:z0,canActivate:[b7]},{path:"product/detail",component:v0},{path:"",redirectTo:"/home",pathMatch:"full"},{path:"**",component:V0}];var w0={providers:[T4(S0),N4(),b4(),w4(),a4()]};var y7={providers:[k4()]},k0=C4(w0,y7);var N7=()=>y4(p0,k0),Q9=N7;export{Q9 as a};
