@if (count($errors))
    <div class="form-group m-t-sm">
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $curError)
                    <li>{{ $curError }}</li>
                @endforeach
            </ul>
        </div>
    </div>
@endif