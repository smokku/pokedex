import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspritesMaxFieldsModelBase } from "./PokemonV2PokemonspritesMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspritesMaxFieldsModel */
export interface PokemonV2PokemonspritesMaxFieldsModelType extends Instance<typeof PokemonV2PokemonspritesMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspritesMaxFieldsModel */
export { selectFromPokemonV2PokemonspritesMaxFields, pokemonV2PokemonspritesMaxFieldsModelPrimitives, PokemonV2PokemonspritesMaxFieldsModelSelector } from "./PokemonV2PokemonspritesMaxFieldsModel.base"

/**
 * PokemonV2PokemonspritesMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonspritesMaxFieldsModel = PokemonV2PokemonspritesMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
