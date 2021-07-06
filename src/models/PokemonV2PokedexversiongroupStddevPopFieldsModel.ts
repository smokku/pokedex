import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexversiongroupStddevPopFieldsModelBase } from "./PokemonV2PokedexversiongroupStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexversiongroupStddevPopFieldsModel */
export interface PokemonV2PokedexversiongroupStddevPopFieldsModelType extends Instance<typeof PokemonV2PokedexversiongroupStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexversiongroupStddevPopFieldsModel */
export { selectFromPokemonV2PokedexversiongroupStddevPopFields, pokemonV2PokedexversiongroupStddevPopFieldsModelPrimitives, PokemonV2PokedexversiongroupStddevPopFieldsModelSelector } from "./PokemonV2PokedexversiongroupStddevPopFieldsModel.base"

/**
 * PokemonV2PokedexversiongroupStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokedexversiongroupStddevPopFieldsModel = PokemonV2PokedexversiongroupStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
