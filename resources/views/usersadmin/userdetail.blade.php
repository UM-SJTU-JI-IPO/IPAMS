<div class="ibox-content">
    <div class="row m-b-xs">
        <div class="col-md-3 col-lg-3 " align="center">
            @if($user->avatarPath)
                <img alt="User Pic" src="{{ asset('storage/'.$user->avatarPath) }}" class="img-rounded img-responsive">
            @else
                <img alt="User Pic" src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" class="img-rounded img-responsive">
            @endif
        </div>

        <div class=" col-md-9 col-lg-9 ">
            <table class="table table-user-information">
                <tbody>
                <tr>
                    <th>Legal Name:</th>
                    <td>{{ $user->name }}</td>
                </tr>
                <tr>
                    <th>SJTU ID</th>
                    <td>{{ $user->sjtuID }}</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>{{ $user->gender }}</td>
                </tr>
                <tr>
                    <th>Birthday:</th>
                    <td>{{ $user->birthday }}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{ $user->email }}</td>
                </tr>
                <tr>
                    <th>Mobile Phone</th>
                    <td>{{ $user->mobile }}</td>
                </tr>
                <tr>
                    <th>Identity File</th>
                    <td>
                        {{ $user->idCardType }}<br>
                        {{ $user->idCardNo }}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row ">
        <div class=" col-md-4 col-lg-4 ">
            <table class="table">
                <tbody>
                <tr>
                    <th>Passport No</th>
                    <td>
                        @if ($user->passportNo)
                            {{ $user->passportNo }}
                        @else
                            Please Update
                        @endif
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class=" col-md-4 col-lg-4 ">
            <table class="table">
                <tbody>
                <tr>
                    <th>Passport Issue Date</th>
                    <td>
                        @if ($user->passportIssueDate)
                            {{ $user->passportIssueDate }}
                        @else
                            Please Update
                        @endif
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class=" col-md-4 col-lg-4 ">
            <table class="table">
                <tbody>
                <tr>
                    <th>Passport Expire Date</th>
                    <td>
                        @if ($user->passportExpireDate)
                            {{ $user->passportExpireDate }}
                        @else
                            Please Update
                        @endif
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
