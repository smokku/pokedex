import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexversiongroupStddevSampFieldsModelBase } from "./PokemonV2PokedexversiongroupStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexversiongroupStddevSampFieldsModel */
export interface PokemonV2PokedexversiongroupStddevSampFieldsModelType extends Instance<typeof PokemonV2PokedexversiongroupStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexversiongroupStddevSampFieldsModel */
export { selectFromPokemonV2PokedexversiongroupStddevSampFields, pokemonV2PokedexversiongroupStddevSampFieldsModelPrimitives, PokemonV2PokedexversiongroupStddevSampFieldsModelSelector } from "./PokemonV2PokedexversiongroupStddevSampFieldsModel.base"

/**
 * PokemonV2PokedexversiongroupStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokedexversiongroupStddevSampFieldsModel = PokemonV2PokedexversiongroupStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
