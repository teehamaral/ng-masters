function buscarissues(){

    function GithubRepo(username, reponame){
        this.username = username;
        this.reponame = reponame;
        this.issues = [];
        this.url = 'https://api.github.com/repos/' + this.username + '/' + this.reponame + '/issues';
    }

    GithubRepo.prototype.buscar_issues = function(){
        var _this = this;
        $.get(this.url).success(function(result){
            _this.issues = result;
            _this.limpa_tabela();
            _this.popular_tabela();
        });
    }

    GithubRepo.prototype.popular_tabela = function(){
        obj = this.issues;
        for (i in obj){
            var table = $('#issues');
            var list = '<tr>';
            list += '<td>' + obj[i].title + '</td>';
            list += '<td> <a target="_blank" href="' + obj[i].html_url + '">' + obj[i].html_url + ' </a> </td>';
            list += '<td>' + obj[i].state + '</td>';
            list += '</tr>';
            table.append(list);
        }
    }
    
    GithubRepo.prototype.limpa_tabela = function(){
        var item_list = $('#issues tr');
        item_list.remove();
    }

    var user = $('#user').val();
    var repositorio = $('#reponame').val();

    var le_repo = new GithubRepo(user, repositorio);
    le_repo.buscar_issues();

}