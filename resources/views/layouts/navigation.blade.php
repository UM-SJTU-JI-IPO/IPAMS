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
                            </span>
                            <span class="text-muted text-xs block">User Menu <b class="caret"></b></span>
                        </span>
                    </a>
                    <ul class="dropdown-menu animated fadeInLeft m-t-xs">
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
            @if (Auth::check())
                <li class="{{ isActiveRoute('dashboard') }}">
                    <a href="{{ url('/dashboard') }}"><i class="fa fa-th-large"></i> <span class="nav-label">Dashboard</span> </a>
                </li>
                <li class="{{ isActiveRoute('user') }}
                           {{ isActiveRoute('editUser') }}
                          ">
                    <a href="{{ url('/user') }}"><i class="fa fa-user"></i> <span class="nav-label">Profile</span> </a>
                </li>
                <li class="{{ isActiveRoute('transferPanel') }}
                           {{ isActiveRoute('newTransferApplication') }}
                           {{ isActiveRoute('myTransferApplications') }}
                        ">
                    <a><i class="fa fa-exchange"></i> <span class="nav-label">Transfer Courses</span> <span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li class="{{ isActiveRoute('newTransferApplication') }}"><a href="{{ url('/transferCourses/newApplication') }}">New Application</a></li>
                        <li class="{{ isActiveRoute('myTransferApplications') }}"><a href="{{ url('/transferCourses/myApplication') }}">My Applications</a></li>
                    </ul>
                </li>
                @if (isAdmin(Auth::user()))
                    <li class="{{ isActiveRoute('usersAdmin') }}">
                        <a href="{{ url('/usersadmin') }}"><i class="fa fa-address-book"></i> <span class="nav-label">Users Admin</span> </a>
                    </li>
                @endif

            @else
                <li class="{{ isActiveRoute('main') }}">
                    <a href="{{ url('/') }}"><i class="fa fa-th-large"></i> <span class="nav-label">Welcome</span></a>
                </li>
            @endif
        </ul>

    </div>
</nav>
