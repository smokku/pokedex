import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthrateSumFieldsModelBase } from "./PokemonV2GrowthrateSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthrateSumFieldsModel */
export interface PokemonV2GrowthrateSumFieldsModelType extends Instance<typeof PokemonV2GrowthrateSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthrateSumFieldsModel */
export { selectFromPokemonV2GrowthrateSumFields, pokemonV2GrowthrateSumFieldsModelPrimitives, PokemonV2GrowthrateSumFieldsModelSelector } from "./PokemonV2GrowthrateSumFieldsModel.base"

/**
 * PokemonV2GrowthrateSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2GrowthrateSumFieldsModel = PokemonV2GrowthrateSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
