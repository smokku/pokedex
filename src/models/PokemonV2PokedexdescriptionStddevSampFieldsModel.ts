import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexdescriptionStddevSampFieldsModelBase } from "./PokemonV2PokedexdescriptionStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexdescriptionStddevSampFieldsModel */
export interface PokemonV2PokedexdescriptionStddevSampFieldsModelType extends Instance<typeof PokemonV2PokedexdescriptionStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexdescriptionStddevSampFieldsModel */
export { selectFromPokemonV2PokedexdescriptionStddevSampFields, pokemonV2PokedexdescriptionStddevSampFieldsModelPrimitives, PokemonV2PokedexdescriptionStddevSampFieldsModelSelector } from "./PokemonV2PokedexdescriptionStddevSampFieldsModel.base"

/**
 * PokemonV2PokedexdescriptionStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokedexdescriptionStddevSampFieldsModel = PokemonV2PokedexdescriptionStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
