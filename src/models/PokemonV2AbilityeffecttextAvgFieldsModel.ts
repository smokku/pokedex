import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityeffecttextAvgFieldsModelBase } from "./PokemonV2AbilityeffecttextAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityeffecttextAvgFieldsModel */
export interface PokemonV2AbilityeffecttextAvgFieldsModelType extends Instance<typeof PokemonV2AbilityeffecttextAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityeffecttextAvgFieldsModel */
export { selectFromPokemonV2AbilityeffecttextAvgFields, pokemonV2AbilityeffecttextAvgFieldsModelPrimitives, PokemonV2AbilityeffecttextAvgFieldsModelSelector } from "./PokemonV2AbilityeffecttextAvgFieldsModel.base"

/**
 * PokemonV2AbilityeffecttextAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2AbilityeffecttextAvgFieldsModel = PokemonV2AbilityeffecttextAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
