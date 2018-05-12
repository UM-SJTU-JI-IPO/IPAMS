{{-- This is the left hand major navigation tab --}}
<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">
            <li class="nav-header">
                <div class="dropdown profile-element">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <span class="clear">
                            <span class="block m-t-xs">
                                @if (Auth::check())
                                    <strong class="font-bold">{{ Auth::user()->name }}</strong>
                                @else
                                    <strong class="font-bold">Log in Here</strong>
                                @endif
                            </span> <span class="text-muted text-xs block">User Menu <b class="caret"></b></span>
                        </span>
                    </a>
                    <ul class="dropdown-menu animated fadeInRight m-t-xs">
                        @if (Auth::check())
                            <li><a href="/logout"><i class="fa fa-sign-out"></i> Log out</a></li>
                        @else
                            <li><a href="/login/jaccount"><i class="fa fa-sign-in"></i> Log in</a></li>
                        @endif

                    </ul>
                </div>
                <div class="logo-element">
                    JI
                </div>
            </li>
            <li class="{{ isActiveRoute('main') }}">
                <a href="{{ url('/') }}"><i class="fa fa-th-large"></i> <span class="nav-label">Main view</span></a>
            </li>
            <li class="{{ isActiveRoute('minor') }}">
                <a href="{{ url('/minor') }}"><i class="fa fa-th-large"></i> <span class="nav-label">Minor view</span> </a>
            </li>
        </ul>

    </div>
</nav>
