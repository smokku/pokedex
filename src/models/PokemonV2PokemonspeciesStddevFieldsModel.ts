import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesStddevFieldsModelBase } from "./PokemonV2PokemonspeciesStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesStddevFieldsModel */
export interface PokemonV2PokemonspeciesStddevFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesStddevFieldsModel */
export { selectFromPokemonV2PokemonspeciesStddevFields, pokemonV2PokemonspeciesStddevFieldsModelPrimitives, PokemonV2PokemonspeciesStddevFieldsModelSelector } from "./PokemonV2PokemonspeciesStddevFieldsModel.base"

/**
 * PokemonV2PokemonspeciesStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonspeciesStddevFieldsModel = PokemonV2PokemonspeciesStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
