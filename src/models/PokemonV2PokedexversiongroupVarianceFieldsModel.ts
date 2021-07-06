import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexversiongroupVarianceFieldsModelBase } from "./PokemonV2PokedexversiongroupVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexversiongroupVarianceFieldsModel */
export interface PokemonV2PokedexversiongroupVarianceFieldsModelType extends Instance<typeof PokemonV2PokedexversiongroupVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexversiongroupVarianceFieldsModel */
export { selectFromPokemonV2PokedexversiongroupVarianceFields, pokemonV2PokedexversiongroupVarianceFieldsModelPrimitives, PokemonV2PokedexversiongroupVarianceFieldsModelSelector } from "./PokemonV2PokedexversiongroupVarianceFieldsModel.base"

/**
 * PokemonV2PokedexversiongroupVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokedexversiongroupVarianceFieldsModel = PokemonV2PokedexversiongroupVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
