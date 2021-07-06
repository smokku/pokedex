import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexversiongroupMinFieldsModelBase } from "./PokemonV2PokedexversiongroupMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexversiongroupMinFieldsModel */
export interface PokemonV2PokedexversiongroupMinFieldsModelType extends Instance<typeof PokemonV2PokedexversiongroupMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexversiongroupMinFieldsModel */
export { selectFromPokemonV2PokedexversiongroupMinFields, pokemonV2PokedexversiongroupMinFieldsModelPrimitives, PokemonV2PokedexversiongroupMinFieldsModelSelector } from "./PokemonV2PokedexversiongroupMinFieldsModel.base"

/**
 * PokemonV2PokedexversiongroupMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokedexversiongroupMinFieldsModel = PokemonV2PokedexversiongroupMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
