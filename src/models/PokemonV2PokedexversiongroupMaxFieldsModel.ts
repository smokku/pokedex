import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexversiongroupMaxFieldsModelBase } from "./PokemonV2PokedexversiongroupMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexversiongroupMaxFieldsModel */
export interface PokemonV2PokedexversiongroupMaxFieldsModelType extends Instance<typeof PokemonV2PokedexversiongroupMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexversiongroupMaxFieldsModel */
export { selectFromPokemonV2PokedexversiongroupMaxFields, pokemonV2PokedexversiongroupMaxFieldsModelPrimitives, PokemonV2PokedexversiongroupMaxFieldsModelSelector } from "./PokemonV2PokedexversiongroupMaxFieldsModel.base"

/**
 * PokemonV2PokedexversiongroupMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokedexversiongroupMaxFieldsModel = PokemonV2PokedexversiongroupMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
