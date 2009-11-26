/*
	Extends SC.Record for property that contains the array
	of record attributes only.
*/
SC.Record.mixin({
  extend: function() {
    var attributeFields = arguments[0];
    var ret = SC.Object.extend.apply(this, arguments);
    SC.Query._scq_didDefineRecordType(arguments);
    // console.log(attributeFields);
    if (attributeFields) {
      ret.prototype.attributeFields = {};
      for (var key in attributeFields) {
        if (SC.typeOf(attributeFields[key]) == SC.T_OBJECT && attributeFields[key].kindOf(SC.RecordAttribute)) {
          ret.prototype.attributeFields[key] = attributeFields[key];
        }
      }
    }
    return ret ;
  }
});
