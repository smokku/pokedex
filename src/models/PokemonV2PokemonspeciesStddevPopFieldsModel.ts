import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesStddevPopFieldsModelBase } from "./PokemonV2PokemonspeciesStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesStddevPopFieldsModel */
export interface PokemonV2PokemonspeciesStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesStddevPopFieldsModel */
export { selectFromPokemonV2PokemonspeciesStddevPopFields, pokemonV2PokemonspeciesStddevPopFieldsModelPrimitives, PokemonV2PokemonspeciesStddevPopFieldsModelSelector } from "./PokemonV2PokemonspeciesStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonspeciesStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonspeciesStddevPopFieldsModel = PokemonV2PokemonspeciesStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
