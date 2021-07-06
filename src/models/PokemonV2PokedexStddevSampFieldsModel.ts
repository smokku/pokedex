import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexStddevSampFieldsModelBase } from "./PokemonV2PokedexStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexStddevSampFieldsModel */
export interface PokemonV2PokedexStddevSampFieldsModelType extends Instance<typeof PokemonV2PokedexStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexStddevSampFieldsModel */
export { selectFromPokemonV2PokedexStddevSampFields, pokemonV2PokedexStddevSampFieldsModelPrimitives, PokemonV2PokedexStddevSampFieldsModelSelector } from "./PokemonV2PokedexStddevSampFieldsModel.base"

/**
 * PokemonV2PokedexStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokedexStddevSampFieldsModel = PokemonV2PokedexStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
