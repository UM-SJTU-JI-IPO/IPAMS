<div class="row border-bottom">
    <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
        </div>
        <ul class="nav navbar-top-links navbar-right">
            <li>
                @if (Auth::check())
                    <a href="/logout">
                        {{ Auth::user()->name }} <i class="fa fa-sign-out"></i> Log out
                    </a>
                @else
                    <a href="/login/jaccount">
                        <i class="fa fa-sign-in"></i> Log in with Jaccount
                    </a>
                @endif
            </li>
        </ul>
    </nav>
</div>
