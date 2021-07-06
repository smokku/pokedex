import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesStddevSampFieldsModelBase } from "./PokemonV2PokemonspeciesStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesStddevSampFieldsModel */
export interface PokemonV2PokemonspeciesStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesStddevSampFieldsModel */
export { selectFromPokemonV2PokemonspeciesStddevSampFields, pokemonV2PokemonspeciesStddevSampFieldsModelPrimitives, PokemonV2PokemonspeciesStddevSampFieldsModelSelector } from "./PokemonV2PokemonspeciesStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonspeciesStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonspeciesStddevSampFieldsModel = PokemonV2PokemonspeciesStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
