import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleProductoUsuarioNormalPage } from './detalle-producto-usuario-normal.page';

describe('DetalleProductoUsuarioNormalPage', () => {
  let component: DetalleProductoUsuarioNormalPage;
  let fixture: ComponentFixture<DetalleProductoUsuarioNormalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleProductoUsuarioNormalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleProductoUsuarioNormalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
