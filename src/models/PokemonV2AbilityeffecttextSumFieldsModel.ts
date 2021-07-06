import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityeffecttextSumFieldsModelBase } from "./PokemonV2AbilityeffecttextSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityeffecttextSumFieldsModel */
export interface PokemonV2AbilityeffecttextSumFieldsModelType extends Instance<typeof PokemonV2AbilityeffecttextSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityeffecttextSumFieldsModel */
export { selectFromPokemonV2AbilityeffecttextSumFields, pokemonV2AbilityeffecttextSumFieldsModelPrimitives, PokemonV2AbilityeffecttextSumFieldsModelSelector } from "./PokemonV2AbilityeffecttextSumFieldsModel.base"

/**
 * PokemonV2AbilityeffecttextSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2AbilityeffecttextSumFieldsModel = PokemonV2AbilityeffecttextSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
