// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract BABYSEALS { 

//DATOS DE TOKEN
    string public name = "BABYSEALS";
    string  public symbol = "BS";
    uint256 public totalSupply_ = 1000 * 1 ether; // 1000 TOKENS
    uint8   public decimals = 18;

// EVENTO PARA TRANSFERIR 

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );


//EVENTO DE APROBACION
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );
    
    mapping(address => uint256) public balances;
    mapping(address => mapping(address => uint256)) public allowed;


// DATO PUBLICO DE SUPPLY   
    constructor() public {
        balances[msg.sender] = totalSupply_;
    }

    function totalSupply() public view returns (uint256) {
        return totalSupply_;
    }

    function balanceOf(address _owner) public view returns (uint256) {
        return balances[_owner];
    }
///DIRECCION

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balances[msg.sender] >= _value);
        balances[msg.sender] = balances[msg.sender] - _value;
        balances[_to] =  balances[_to] + _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowed[msg.sender][_spender] = _value; 
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

//CANTIDAD DE TOKEN PARA TRANSFERIR

    function airDropToken() public {
        balances[msg.sender] += 10 * 1 ether;
        totalSupply_ += 10 * 1 ether;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_value <= balances[_from]);
        require(_value <= allowed[_from][msg.sender]);
        balances[_from] -= _value;
        balances[_to] += _value;
        allowed[_from][msg.sender] -= _value; 
        emit Transfer(_from, _to, _value);
        return true;
    }
    
    function allowance(address _owner, address _spender) public view returns (uint256 remaining) {
        return allowed[_owner][_spender];
    }
}