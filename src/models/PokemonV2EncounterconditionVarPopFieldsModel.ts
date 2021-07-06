import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionVarPopFieldsModelBase } from "./PokemonV2EncounterconditionVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionVarPopFieldsModel */
export interface PokemonV2EncounterconditionVarPopFieldsModelType extends Instance<typeof PokemonV2EncounterconditionVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionVarPopFieldsModel */
export { selectFromPokemonV2EncounterconditionVarPopFields, pokemonV2EncounterconditionVarPopFieldsModelPrimitives, PokemonV2EncounterconditionVarPopFieldsModelSelector } from "./PokemonV2EncounterconditionVarPopFieldsModel.base"

/**
 * PokemonV2EncounterconditionVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EncounterconditionVarPopFieldsModel = PokemonV2EncounterconditionVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
