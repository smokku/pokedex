import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvalueVarPopFieldsModelBase } from "./PokemonV2EncounterconditionvalueVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvalueVarPopFieldsModel */
export interface PokemonV2EncounterconditionvalueVarPopFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvalueVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvalueVarPopFieldsModel */
export { selectFromPokemonV2EncounterconditionvalueVarPopFields, pokemonV2EncounterconditionvalueVarPopFieldsModelPrimitives, PokemonV2EncounterconditionvalueVarPopFieldsModelSelector } from "./PokemonV2EncounterconditionvalueVarPopFieldsModel.base"

/**
 * PokemonV2EncounterconditionvalueVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EncounterconditionvalueVarPopFieldsModel = PokemonV2EncounterconditionvalueVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
