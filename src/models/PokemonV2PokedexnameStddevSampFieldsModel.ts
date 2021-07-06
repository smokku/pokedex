import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexnameStddevSampFieldsModelBase } from "./PokemonV2PokedexnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexnameStddevSampFieldsModel */
export interface PokemonV2PokedexnameStddevSampFieldsModelType extends Instance<typeof PokemonV2PokedexnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexnameStddevSampFieldsModel */
export { selectFromPokemonV2PokedexnameStddevSampFields, pokemonV2PokedexnameStddevSampFieldsModelPrimitives, PokemonV2PokedexnameStddevSampFieldsModelSelector } from "./PokemonV2PokedexnameStddevSampFieldsModel.base"

/**
 * PokemonV2PokedexnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokedexnameStddevSampFieldsModel = PokemonV2PokedexnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
