import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesdescriptionVarPopFieldsModelBase } from "./PokemonV2PokemonspeciesdescriptionVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesdescriptionVarPopFieldsModel */
export interface PokemonV2PokemonspeciesdescriptionVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesdescriptionVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesdescriptionVarPopFieldsModel */
export { selectFromPokemonV2PokemonspeciesdescriptionVarPopFields, pokemonV2PokemonspeciesdescriptionVarPopFieldsModelPrimitives, PokemonV2PokemonspeciesdescriptionVarPopFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionVarPopFieldsModel.base"

/**
 * PokemonV2PokemonspeciesdescriptionVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonspeciesdescriptionVarPopFieldsModel = PokemonV2PokemonspeciesdescriptionVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
