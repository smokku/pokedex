import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolorMaxFieldsModelBase } from "./PokemonV2PokemoncolorMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolorMaxFieldsModel */
export interface PokemonV2PokemoncolorMaxFieldsModelType extends Instance<typeof PokemonV2PokemoncolorMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolorMaxFieldsModel */
export { selectFromPokemonV2PokemoncolorMaxFields, pokemonV2PokemoncolorMaxFieldsModelPrimitives, PokemonV2PokemoncolorMaxFieldsModelSelector } from "./PokemonV2PokemoncolorMaxFieldsModel.base"

/**
 * PokemonV2PokemoncolorMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemoncolorMaxFieldsModel = PokemonV2PokemoncolorMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
