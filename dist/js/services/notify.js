const app = angular.module("minhasFinancas")

app.service("Notify", ['ngDialog', function (ngDialog) {
        this.openModal = function (title, message){
            return ngDialog.open({
                template: `
                    <h4 class="sub-title">${title}</h4>
                    <div>
                        <p>
                            ${message}
                        </p>
                    </div>
                `,
                plain: true,
                className: 'ngdialog-theme-default',
                width: '80%',
            });
        }

        this.openModalTemplate = function (html, scope){
            return ngDialog.open({ 
                template: html,
                plain: true,
                className: 'ngdialog-theme-default', 
                scope: scope ,
                width: '55%',
            });
        }

        this.openConfirm = function (data){
            return ngDialog.openConfirm({ 
                template: `
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="main-title">Exclusão</h1>
                    </div>

                    <div class="col-12 atencoius-text">
                        Deseja realmente excluir essa finança???
                    </div>

                    <div class="col-12 text-right">
                        <button class="btn btn-gray" ng-click="closeThisDialog(false)">
                            Cancelar
                        </button>
                        <button class="btn btn-danger" ng-click="confirm(true)">
                            Excluir
                        </button>
                    </div>
                </div>
                `,
                plain: true,
                className: 'ngdialog-theme-default', 
                data: data ,
                width: '20%'
            })
        }
    }
])