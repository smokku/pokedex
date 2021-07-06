import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolornameVarPopFieldsModelBase } from "./PokemonV2PokemoncolornameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolornameVarPopFieldsModel */
export interface PokemonV2PokemoncolornameVarPopFieldsModelType extends Instance<typeof PokemonV2PokemoncolornameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolornameVarPopFieldsModel */
export { selectFromPokemonV2PokemoncolornameVarPopFields, pokemonV2PokemoncolornameVarPopFieldsModelPrimitives, PokemonV2PokemoncolornameVarPopFieldsModelSelector } from "./PokemonV2PokemoncolornameVarPopFieldsModel.base"

/**
 * PokemonV2PokemoncolornameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemoncolornameVarPopFieldsModel = PokemonV2PokemoncolornameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
