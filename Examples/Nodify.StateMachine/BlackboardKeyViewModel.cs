﻿namespace Nodify.StateMachine
{
    public enum BlackboardKeyType
    {
        Boolean,
        Integer,
        Float,
        Double,
        String,
        Object
    }

    public class BlackboardKeyViewModel : ObservableObject
    {
        private string? _name = "New key";
        public string? Name
        {
            get => _name;
            set => SetProperty(ref _name, value);
        }

        private BlackboardKeyType _type;
        public BlackboardKeyType Type
        {
            get => _type;
            set
            {
                if (SetProperty(ref _type, value))
                {
                    Value = GetDefaultValue(_type);
                }
            }
        }

        private object? _value = BoxValue.False;
        public object? Value
        {
            get => _value;
            set => SetProperty(ref _value, value);
        }

        public object? GetDefaultValue(BlackboardKeyType type)
            => type switch
            {
                BlackboardKeyType.Boolean => BoxValue.False,
                BlackboardKeyType.String => string.Empty,
                BlackboardKeyType.Integer => BoxValue.Int0,
                BlackboardKeyType.Double => BoxValue.Double0,
                BlackboardKeyType.Float => 0.0f,
                BlackboardKeyType.Object => null,
                _ => null
            };
    }
}
