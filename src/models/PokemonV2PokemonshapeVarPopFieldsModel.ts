import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapeVarPopFieldsModelBase } from "./PokemonV2PokemonshapeVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapeVarPopFieldsModel */
export interface PokemonV2PokemonshapeVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonshapeVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapeVarPopFieldsModel */
export { selectFromPokemonV2PokemonshapeVarPopFields, pokemonV2PokemonshapeVarPopFieldsModelPrimitives, PokemonV2PokemonshapeVarPopFieldsModelSelector } from "./PokemonV2PokemonshapeVarPopFieldsModel.base"

/**
 * PokemonV2PokemonshapeVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonshapeVarPopFieldsModel = PokemonV2PokemonshapeVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
