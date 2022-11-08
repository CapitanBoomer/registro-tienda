import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarProductoUsuarioNormalPage } from './listar-producto-usuario-normal.page';

describe('ListarProductoUsuarioNormalPage', () => {
  let component: ListarProductoUsuarioNormalPage;
  let fixture: ComponentFixture<ListarProductoUsuarioNormalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarProductoUsuarioNormalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarProductoUsuarioNormalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
