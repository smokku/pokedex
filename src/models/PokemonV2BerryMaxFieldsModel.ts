import { Instance } from "mobx-state-tree"
import { PokemonV2BerryMaxFieldsModelBase } from "./PokemonV2BerryMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryMaxFieldsModel */
export interface PokemonV2BerryMaxFieldsModelType extends Instance<typeof PokemonV2BerryMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryMaxFieldsModel */
export { selectFromPokemonV2BerryMaxFields, pokemonV2BerryMaxFieldsModelPrimitives, PokemonV2BerryMaxFieldsModelSelector } from "./PokemonV2BerryMaxFieldsModel.base"

/**
 * PokemonV2BerryMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2BerryMaxFieldsModel = PokemonV2BerryMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
