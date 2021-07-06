import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformspritesMaxFieldsModelBase } from "./PokemonV2PokemonformspritesMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformspritesMaxFieldsModel */
export interface PokemonV2PokemonformspritesMaxFieldsModelType extends Instance<typeof PokemonV2PokemonformspritesMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformspritesMaxFieldsModel */
export { selectFromPokemonV2PokemonformspritesMaxFields, pokemonV2PokemonformspritesMaxFieldsModelPrimitives, PokemonV2PokemonformspritesMaxFieldsModelSelector } from "./PokemonV2PokemonformspritesMaxFieldsModel.base"

/**
 * PokemonV2PokemonformspritesMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonformspritesMaxFieldsModel = PokemonV2PokemonformspritesMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
