import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesdescriptionMaxFieldsModelBase } from "./PokemonV2PokemonspeciesdescriptionMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesdescriptionMaxFieldsModel */
export interface PokemonV2PokemonspeciesdescriptionMaxFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesdescriptionMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesdescriptionMaxFieldsModel */
export { selectFromPokemonV2PokemonspeciesdescriptionMaxFields, pokemonV2PokemonspeciesdescriptionMaxFieldsModelPrimitives, PokemonV2PokemonspeciesdescriptionMaxFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionMaxFieldsModel.base"

/**
 * PokemonV2PokemonspeciesdescriptionMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonspeciesdescriptionMaxFieldsModel = PokemonV2PokemonspeciesdescriptionMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
