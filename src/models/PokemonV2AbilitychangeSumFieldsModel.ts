import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeSumFieldsModelBase } from "./PokemonV2AbilitychangeSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeSumFieldsModel */
export interface PokemonV2AbilitychangeSumFieldsModelType extends Instance<typeof PokemonV2AbilitychangeSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeSumFieldsModel */
export { selectFromPokemonV2AbilitychangeSumFields, pokemonV2AbilitychangeSumFieldsModelPrimitives, PokemonV2AbilitychangeSumFieldsModelSelector } from "./PokemonV2AbilitychangeSumFieldsModel.base"

/**
 * PokemonV2AbilitychangeSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2AbilitychangeSumFieldsModel = PokemonV2AbilitychangeSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
