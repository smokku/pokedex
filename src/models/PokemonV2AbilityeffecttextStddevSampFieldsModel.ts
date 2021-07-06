import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityeffecttextStddevSampFieldsModelBase } from "./PokemonV2AbilityeffecttextStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityeffecttextStddevSampFieldsModel */
export interface PokemonV2AbilityeffecttextStddevSampFieldsModelType extends Instance<typeof PokemonV2AbilityeffecttextStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityeffecttextStddevSampFieldsModel */
export { selectFromPokemonV2AbilityeffecttextStddevSampFields, pokemonV2AbilityeffecttextStddevSampFieldsModelPrimitives, PokemonV2AbilityeffecttextStddevSampFieldsModelSelector } from "./PokemonV2AbilityeffecttextStddevSampFieldsModel.base"

/**
 * PokemonV2AbilityeffecttextStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2AbilityeffecttextStddevSampFieldsModel = PokemonV2AbilityeffecttextStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
