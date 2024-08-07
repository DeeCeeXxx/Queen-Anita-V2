const axios = require("axios");
let koyeb_api = process.env.KOYEB_API;
let axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: "Bearer " + koyeb_api
  }
};
async function get_deployments() {
  status = false;
  let _0x4302ca = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + koyeb_api
    }
  };
  await axios.get("https://app.koyeb.com/v1/deployments", _0x4302ca).then(_0x67f3c2 => {
    let _0x4fa49c = ["STOPPED", "STOPPING", "ERROR", "ERRPRING"];
    let _0x55212f = [];
    for (let _0x5d4d5e = 0; _0x5d4d5e < _0x67f3c2.data.deployments.length; _0x5d4d5e++) {
      if (!_0x4fa49c.includes(_0x67f3c2.data.deployments[_0x5d4d5e].status)) {
        _0x55212f.push(_0x67f3c2.data.deployments[_0x5d4d5e].status);
      }
    }
    if (_0x55212f.length > 1) {
      status = "true";
    }
  });
  return status;
}
function checkArray(_0x32eadb, _0x5cad11) {
  var _0x1d8b66 = false;
  for (var _0x4e8d33 = 0; _0x4e8d33 < _0x32eadb.length; _0x4e8d33++) {
    if (_0x32eadb[_0x4e8d33].key == _0x5cad11) {
      _0x1d8b66 = true;
      break;
    }
  }
  return _0x1d8b66;
}
async function delvar(_0x25ae0b) {
  var _0x40bd7e = false;
  let {
    data: _0x2f44fe
  } = await axios.get("https://app.koyeb.com/v1/services", axiosConfig);
  let _0x4bcf20 = _0x2f44fe.services[0].id;
  let _0x33a6a6 = await axios.get("https://app.koyeb.com/v1/deployments/" + _0x2f44fe.services[0].latest_deployment_id, axiosConfig);
  let _0x34f4ba = checkArray(_0x33a6a6.data.deployment.definition.env, _0x25ae0b);
  if (_0x34f4ba !== true) {
    return "_No such env in koyeb._";
  }
  let _0x4a80e7 = [];
  for (var _0x19bd41 = 0; _0x19bd41 < _0x33a6a6.data.deployment.definition.env.length; _0x19bd41++) {
    if (_0x33a6a6.data.deployment.definition.env[_0x19bd41].key === _0x25ae0b) {
      continue;
    }
    _0x4a80e7.push(_0x33a6a6.data.deployment.definition.env[_0x19bd41]);
  }
  let _0x719fe0 = {
    definition: {
      name: _0x33a6a6.data.deployment.definition.name,
      routes: _0x33a6a6.data.deployment.definition.routes,
      ports: _0x33a6a6.data.deployment.definition.ports,
      env: _0x4a80e7,
      regions: _0x33a6a6.data.deployment.definition.regions,
      scalings: _0x33a6a6.data.deployment.definition.scalings,
      instance_types: _0x33a6a6.data.deployment.definition.instance_types,
      health_checks: _0x33a6a6.data.deployment.definition.health_checks,
      docker: _0x33a6a6.data.deployment.definition.docker
    }
  };
  await axios.patch("https://app.koyeb.com/v1/services/" + _0x4bcf20, _0x719fe0, axiosConfig).then(_0x41b6bd => {
    if (_0x41b6bd.status === 200) {
      _0x40bd7e = "_Successfully deleted " + _0x25ae0b + " var from koyeb._";
    } else {
      _0x40bd7e = "_Please put Koyeb api key in var KOYEB_API._\nEg: KOYEB_API:api key";
    }
  });
  return _0x40bd7e;
}
async function change_env(_0x1c0dda) {
  var _0x28d120 = "_Please put Koyeb api key in var KOYEB_API._\nEg: KOYEB_API:api key";
  let {
    data: _0x5268c2
  } = await axios.get("https://app.koyeb.com/v1/services", axiosConfig);
  let _0x268e37 = _0x5268c2.services[0].id;
  let _0x24bd6b = await axios.get("https://app.koyeb.com/v1/deployments/" + _0x5268c2.services[0].latest_deployment_id, axiosConfig);
  let _0x96de5c = _0x1c0dda.split(":");
  let _0xba6db1 = [];
  for (var _0x12b7a4 = 0; _0x12b7a4 < _0x24bd6b.data.deployment.definition.env.length; _0x12b7a4++) {
    if (_0x24bd6b.data.deployment.definition.env[_0x12b7a4].key === _0x96de5c[0]) {
      _0xba6db1.push({
        scopes: ["region:fra"],
        key: "" + _0x96de5c[0],
        value: "" + _0x96de5c[1]
      });
    } else {
      _0xba6db1.push(_0x24bd6b.data.deployment.definition.env[_0x12b7a4]);
    }
  }
  let _0x323bf7 = checkArray(_0xba6db1, _0x96de5c[0]);
  if (!_0x323bf7 === true) {
    _0xba6db1.push({
      scopes: ["region:fra"],
      key: "" + _0x96de5c[0],
      value: "" + _0x96de5c[1]
    });
  }
  let _0x2ac742 = {
    definition: {
      name: _0x24bd6b.data.deployment.definition.name,
      routes: _0x24bd6b.data.deployment.definition.routes,
      ports: _0x24bd6b.data.deployment.definition.ports,
      env: _0xba6db1,
      regions: _0x24bd6b.data.deployment.definition.regions,
      scalings: _0x24bd6b.data.deployment.definition.scalings,
      instance_types: _0x24bd6b.data.deployment.definition.instance_types,
      health_checks: _0x24bd6b.data.deployment.definition.health_checks,
      docker: _0x24bd6b.data.deployment.definition.docker
    }
  };
  await axios.patch("https://app.koyeb.com/v1/services/" + _0x268e37, _0x2ac742, axiosConfig).then(_0x448300 => {
    if (_0x448300.status === 200) {
      _0x28d120 = "Successfuly changed var _" + _0x96de5c[0] + ":" + _0x96de5c[1] + " ._";
    } else {
      _0x28d120 = "_Please put Koyeb api key in var KOYEB_API._\nEg: KOYEB_API:api key";
    }
  });
  return _0x28d120;
}
async function getallvar() {
  let {
    data: _0x3e70fa
  } = await axios.get("https://app.koyeb.com/v1/services", axiosConfig);
  let _0x38619a = await axios.get("https://app.koyeb.com/v1/deployments/" + _0x3e70fa.services[0].latest_deployment_id, axiosConfig);
  let _0x35b594 = [];
  for (var _0x34066d = 0; _0x34066d < _0x38619a.data.deployment.definition.env.length; _0x34066d++) {
    if (!_0x38619a.data.deployment.definition.env[_0x34066d].key) {
      continue;
    }
    _0x35b594.push("*" + _0x38619a.data.deployment.definition.env[_0x34066d].key + "* : _" + _0x38619a.data.deployment.definition.env[_0x34066d].value + "_");
  }
  return _0x35b594.join("\n");
}
async function getvar(_0xcd630a) {
  let {
    data: _0x1da652
  } = await axios.get("https://app.koyeb.com/v1/services", axiosConfig);
  let _0x2d0795 = await axios.get("https://app.koyeb.com/v1/deployments/" + _0x1da652.services[0].latest_deployment_id, axiosConfig);
  for (var _0x38de6b = 0; _0x38de6b < _0x2d0795.data.deployment.definition.env.length; _0x38de6b++) {
    if (!_0x2d0795.data.deployment.definition.env[_0x38de6b].key) {
      continue;
    }
    if (_0x2d0795.data.deployment.definition.env[_0x38de6b].key === _0xcd630a) {
      return _0x2d0795.data.deployment.definition.env[_0x38de6b].key + ":" + _0x2d0795.data.deployment.definition.env[_0x38de6b].value;
    }
  }
}
async function redeploy() {
  var _0x4e1978 = false;
  var _0x484138 = {
    deployment_group: "prod",
    sha: ""
  };
  let {
    data: _0x18e13d
  } = await axios.get("https://app.koyeb.com/v1/services", axiosConfig);
  let _0x5ebfce = _0x18e13d.services[0].id;
  try {
    let _0x329071 = await axios.post("https://app.koyeb.com/v1/services/" + _0x5ebfce + "/redeploy", _0x484138, axiosConfig);
    _0x4e1978 = "_update started._";
  } catch (_0x2f9443) {
    _0x4e1978 = "*Got an error in redeploying.*\n*Please put koyeb api key in var KOYEB_API.*\n_Eg: KOYEB_API:api key from https://app.koyeb.com/account/api ._";
  }
  return _0x4e1978;
}
module.exports = {
  redeploy: redeploy,
  getvar: getvar,
  delvar: delvar,
  getallvar: getallvar,
  change_env: change_env,
  get_deployments: get_deployments
};