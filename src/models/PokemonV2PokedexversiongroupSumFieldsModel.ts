import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexversiongroupSumFieldsModelBase } from "./PokemonV2PokedexversiongroupSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexversiongroupSumFieldsModel */
export interface PokemonV2PokedexversiongroupSumFieldsModelType extends Instance<typeof PokemonV2PokedexversiongroupSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexversiongroupSumFieldsModel */
export { selectFromPokemonV2PokedexversiongroupSumFields, pokemonV2PokedexversiongroupSumFieldsModelPrimitives, PokemonV2PokedexversiongroupSumFieldsModelSelector } from "./PokemonV2PokedexversiongroupSumFieldsModel.base"

/**
 * PokemonV2PokedexversiongroupSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokedexversiongroupSumFieldsModel = PokemonV2PokedexversiongroupSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
